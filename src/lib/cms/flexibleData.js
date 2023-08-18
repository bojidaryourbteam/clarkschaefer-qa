import { ROW_ATTRIBUTES, CARD_ATTRIBUTES, CONTACT_ATTRIBUTES, SNIPPET_ATTRIBUTES } from '../fragments'
import { capitalize } from '../utils'
import GQL from './gql'
const MODULES_COUNT = 50

/**
 * @class FlexibleData
 * This class is responsible for returning data for a page.
 *
 * At minimum, it will execute two GQL queries each time fetch is called.
 * The first query returns all top-level attributes (e.g. title, slug, etc.)
 * and the IDs associated with each entry in the blocksCollection for that page.
 *
 * The Ids for each depth level get aggregated, a query is called with all these entry IDs
 * and they will be matched by their ID to their unresolved counterparts in the original
 * response object after which they will replace that entry. Since we don't typically nest
 * beyond three levels, this should keep it to three API calls max, unless there are more
 * than 25 modules in any of these layers.
 *
 */
export default class FlexibleData {
  /**
   * Returns top-level attributes and IDs for all modules on a page,
   * then recursively resolves each collection of modules to return
   * a complete representation of the page.
   *
   * @param {String} slug
   * @returns Contentful Data for a specific page, based on the slug
   */
  static async fetch({ slug, preview = false, collection = 'pageFlexible' }) {
    const queryVars = { slug, preview }
    let query = `
      query GetFlexPageData($slug: String!, $preview: Boolean!) {
        navigationCollection {
          items {
            internalTitle
            config
          }
        }
        collection: ${collection}Collection (where: {slug: $slug }, preview: $preview limit: 1)   {
          items {
            sys { id }
            subNavigation
            internalTitle
            slug
            pageType
            metaTitle
            metaDescription
            metaImage {
              description
              url
            }
            heroHeading
            heroSubheading
            heroImage {
              url
            }
            heroVideo {
              url
            }
            heroCtasCollection {
              ... on ${capitalize(collection)}HeroCtasCollection {
                items {
                  internalTitle
                  label
                  url
                  theme
                }
              }
            }
            heroInsightsLandingCollection {
              items {
                heroHeading
                heroSubheading
                heroImage {
                  url
                }
                readingTime
                publishedAt
                 authorsCollection(limit: 5) {
                  items {
                    ...on PageExpert {
                      firstName
                      lastName
                      image {
                        url
                      }
                      jobTitle
                    }
                  }
                }
              }
            }
            blocksCollection (limit: 25) {
              items {
                __typename
                ...on Entry {
                  unresolved: sys {
                    id
                  }
                }
              }
            }
          }
        }
      }`

    if (collection === 'pageInsight') {
      query = `
      query GetFlexPageData($slug: String!, $preview: Boolean!) {
        navigationCollection {
          items {
            internalTitle
            config
          }
        }
        collection: ${collection}Collection (where: {slug: $slug }, preview: $preview limit: 1)   {
          items {
            sys { id }
            internalTitle
            slug
            pageType
            heroHeading
            heroSubheading
            readingTime
            publishedAt
            heroImage {
              url
            }
            heroVideo {
              url
            }
            heroCtasCollection {
              ... on ${capitalize(collection)}HeroCtasCollection {
                items {
                  internalTitle
                  label
                  url
                  theme
                }
              }
            }
            authorsCollection(limit: 5) {
              items {
                ...on PageExpert {
                  firstName
                  lastName
                  image {
                    url
                  }
                  jobTitle
                }
              }
            }
            audio {
               url
            }
          }
        }
      }`
    }

    if (collection === 'pageService') {
      query = `
      query GetFlexPageData($slug: String!, $preview: Boolean!) {
        navigationCollection {
          items {
            internalTitle
            config
          }
        }
        collection: ${collection}Collection (where: {slug: $slug }, preview: $preview limit: 1)   {
          items {
            subNavigation
            sys { id }
            internalTitle
            slug
            pageType
            metaTitle
            metaDescription
            metaImage {
              description
              url
            }
            heroHeading
            heroSubheading
            heroImage {
              url
            }
            heroVideo {
              url
            }
            heroCtasCollection {
              ... on ${capitalize(collection)}HeroCtasCollection {
                items {
                  internalTitle
                  label
                  url
                  theme
                }
              }
            }
            blocksCollection (limit: 25) {
              items {
                __typename
                ...on Entry {
                  unresolved: sys {
                    id
                  }
                }
              }
            }
          }
        }
      }`
    }

    if (collection === 'pageInsight') {
      query = `
      query GetFlexPageData($slug: String!, $preview: Boolean!) {
        navigationCollection {
          items {
            internalTitle
            config
          }
        }
        collection: ${collection}Collection (where: {slug: $slug }, preview: $preview limit: 1)   {
          items {
            sys { id }
            internalTitle
            slug
            heroHeading
            heroSubheading
            heroImage {
              url
            }
            heroVideo {
              url
            }
            heroCtasCollection {
              ... on ${capitalize(collection)}HeroCtasCollection {
                items {
                  internalTitle
                  label
                  url
                  theme
                }
              }
            }
            audio {
               url
            }
          }
        }
      }`
    }

    if (collection === 'pageExpert') {
      query = `
      query GetFlexPageData($slug: String!, $preview: Boolean!) {
        navigationCollection {
          items {
            internalTitle
            config
          }
        }
        collection: ${collection}Collection (where: {slug: $slug }, preview: $preview limit: 1)   {
          items {
            sys { id }
            internalTitle
            slug
            heroHeading
            heroSubheading
            heroImage {
              url
            }
            heroVideo {
              url
            }
          }
        }
      }`
    }

    const data = await GQL.fetch(query, queryVars, preview)
    if (data.errors) {
      const isUnresolvable = data.errors[0]?.extensions?.contentful?.code === 'UNRESOLVABLE_LINK'
      if (isUnresolvable) {
        console.error(`Error fetching page data: ${data.errors[0].message}`)
      } else {
        throw new Error(`Error fetching page data: ${data.errors[0].message}`)
      }
    }

    const entry = await FlexibleData.extractSingleEntry(data, preview)
    const navigation = data?.data?.navigationCollection?.items

    return { entry, navigation }
  }

  /**
   * Extracts a single page at zeroeth index from the API response on a page request
   *
   * @param {Object} res
   * @returns
   */
  static async extractSingleEntry(res, preview = false) {
    const entries = res?.data?.collection?.items
    const result = await this.getFlexPageModules(entries, preview)
    return result[0]
  }

  /**
   * Resolves an array of unresolved entry IDs into an array of their resolved equivalents
   * queried from the contentful API
   *
   * @param {Array} unresolvedIds[Int]
   * @param {Boolean} preview - optional, hits preview API if true
   * @returns {Array} array of objects containing resolved entries
   */
  static async getResolvedEntries(unresolvedIds = [], preview = false, resolvedIds = []) {
    if (!unresolvedIds?.length) return []
    const resolvedEntries = []

    for (let skip = 0; skip <= unresolvedIds.length; skip += MODULES_COUNT) {
      const queryVars = {
        ids: unresolvedIds.filter(id => !resolvedIds.includes(id)), // Filter out already resolved IDs
        skip,
        limit: MODULES_COUNT,
        preview
      }
      const query = `
        ${ROW_ATTRIBUTES}
        ${CARD_ATTRIBUTES}
        ${CONTACT_ATTRIBUTES}
        ${SNIPPET_ATTRIBUTES}
        query GetFlexPageModules($ids: [String!], $skip: Int, $limit: Int) {
          entryCollection(where: { sys: { id_in: $ids } }, preview: ${preview ? 'true' : 'false'}, skip: $skip, limit: $limit) {
            items {
              sys {
                id
              }
              __typename
              ...Row
              ...Card
              ...Contact
              ...Snippet
            }
          }
        }`

      const data = await GQL.fetch(query, queryVars, preview)
      if (data.errors) {
        const isUnresolvable = data.errors[0]?.extensions?.contentful?.code === 'UNRESOLVABLE_LINK'
        if (isUnresolvable) {
          console.error(`Error Resolving Flex Modules: ${data.errors[0].message}`)
        } else {
          throw new Error(`Error Resolving Flex Modules: ${data.errors[0].message}`)
        }
      }
      const items = data.data.entryCollection.items

      const ids = items.map(item => item.sys.id)
      resolvedIds.push(...ids)

      resolvedEntries.push(...items)
    }

    return resolvedEntries
  }

  /**
   * Takes an array of entries which may or may not include a blocksCollection as one of its entries
   * The blocksCollection Ids are collected, batched and resolved by use of the getResolvedEntries
   * method. The resolvedEntries then recursively get called with this method, going one level deeper.
   * By batching the IDs into a single request (up to 25 modules) we only perform one API call per
   * depth increase
   *
   * @param {Array} Entries root level object of a flex page, or entries within a moduleCollection on
   * subsequent calls
   * @param {Boolean} preview - optional, hits preview API if true
   * @returns {Array} array of objects containing recursively resolved entries
   */
  static async getFlexPageModules(entries = [], preview = false, resolvedIds = []) {
    const accumulatedUnresolvedIds = []

    entries.forEach(entry => {
      if (Object.keys(entry).includes('blocksCollection')) {
        const entries = entry.blocksCollection?.items ?? []
        const ids = entries
          .filter(entry => entry?.unresolved?.id && !resolvedIds.includes(entry.unresolved?.id)) // Filter out already resolved IDs
          .map(entry => entry.unresolved?.id)

        accumulatedUnresolvedIds.push(...ids)
      }
    })

    if (accumulatedUnresolvedIds.length > 0) {
      const resolvedEntries = await this.getResolvedEntries(accumulatedUnresolvedIds, preview, resolvedIds)
      resolvedIds.push(...resolvedEntries.map(item => item.sys.id))

      const recurEntries = await this.getFlexPageModules(resolvedEntries, preview, resolvedIds)

      // Reconciliation phase - match resolved entries to their unresolved counterparts by ID
      entries.forEach(entry => {
        if (entry?.blocksCollection?.items) {
          entry.blocksCollection.items = entry.blocksCollection.items.map(item => {
            return recurEntries.find(el => el.sys.id === item?.unresolved?.id) || item
          })
        }
      })
    }
    return entries
  }
}
