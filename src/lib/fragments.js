export const ROW_ATTRIBUTES = `
  fragment Row on Row {
    blocksCollection (limit: 16) {
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
`

export const CARD_ATTRIBUTES = `
  fragment Card on Card {
    theme
    image {
      url
    }
    heading
    subheading
    url
    backgroundColor
  }
`

export const CONTACT_ATTRIBUTES = `
  fragment Contact on Snippet {
    __typename
    config

 }
`

export const SNIPPET_ATTRIBUTES = `
  fragment Snippet on Snippet {
    internalTitle
    config
    componentType
    referencesCollection(limit:10) {
      items {
        ...on ContentBlock {
          internalTitle
          textAlign
          content {
            json
          }
          ctasCollection {
            items {
              theme
              label
              url
            }
          }
        }
        ... on PageService {
          __typename
          heroImage {
            url
          }
          heroHeading
          heroSubheading
          slug
        }
        ...on PageInsight {
          __typename
          slug
          popular
          category
          heroHeading
          heroImage {
            url
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
          servicesCollection (limit: 5){
            items {
              heroHeading
              ...on PageService {
                heroHeading
              }
            }
          }
        }
        ...on PageExpert{
          __typename
          firstName
          lastName
          phone
          email
          linkedinUrl
          image {
            url
          }
          jobTitle
          slug
          servicesCollection (limit: 10) {
            items {
              ...on PageService {
                __typename
                heroHeading
              }
            }
          }
        }
        ... on Row {
          internalTitle
          blocksCollection(limit: 4) {
            items {
              ... on ContentBlock {
                internalTitle
                textAlign
                content {
                  json
                }
              }
              ... on Card {
                internalTitle
                heading
                subheading
                url
              }
            }
          }
        }
        ... on Snippet {
          config
          internalTitle
          referencesCollection(limit: 4) {
            items {
              ... on PageInsight {
                slug
                heroImage {
                  url
                }
              }
              ... on Card {
                internalTitle
                heading
                subheading
              }
              ... on ContentBlock {
                internalTitle
                textAlign
                content {
                  json
                }
                ctasCollection {
                  items {
                    internalTitle
                    label
                    url
                    theme
                  }
                }
              }
              ... on PageExpert {
                internalTitle
                firstName
                lastName
                jobTitle
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
