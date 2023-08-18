import GQL from './gql'

/**
 * @param {Array} excludeSlugs - Array of slugs to exclude from the query
 * @returns Contentful Data - Object to create dynamic paths based on the retrieved slugs
 */
export async function getPagePaths(
  collection = 'pageFlexible',

  excludeSlugs = ['home', 'services', 'insights']
) {
  const data = await GQL.fetch(
    `query ($slugs: [String]) {
      collection: ${collection}Collection(where:{slug_not_in: $slugs}) {
        items {
          slug
        }
      }
    }
    `,
    { slugs: excludeSlugs }
  )
  const slugs = data.data?.collection.items.map(page => {
    const slugArray = page.slug.split('/')
    return { params: { slug: slugArray } }
  })

  return slugs
}

/**
 * Verifies a preview slug in a GraphQL collection.
 *
 * @param {string} slug - The slug to verify.
 * @param {string} type - The type of collection to query.
 * @param {string} previewEnv - The preview environment to use.
 * @returns {Promise<string>} - A promise that resolves to the verified slug, or null if not found.
 * @throws {Error} - Throws an error if there is an issue verifying the preview slug.
 */
export async function verifyPreviewSlug(slug, type, previewEnv) {
  const collectionType = `${type}Collection`
  const queryVars = { slug }
  const query = `
    query ($slug: String!) {
      ${collectionType} ( where: { slug: $slug } preview:true ) {
        items {
          slug
        }
      }
    }`

  const data = await GQL.fetch(query, queryVars, true, previewEnv)
  if (data.errors) {
    throw new Error(`Error verifying preview slug: ${data.errors[0].message}`)
  }
  const verifiedSlug = data?.data[collectionType]?.items[0]?.slug
  return verifiedSlug
}
