import React from 'react'
import Insights from './Insights'

export default {
  title: 'Components/Insights',
  component: Insights
}

const Template = args => <Insights {...args} />

export const Default = Template.bind({})
Default.args = {
  referencesCollection: {
    items: [
      {
        slug: 'test-insight-1',
        heroHeading: 'Unleashing the potential of AI for enhanced efficiency and growth.',
        heroImage: {
          url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png'
        },
        authorsCollection: {
          items: [
            {
              firstName: 'Jennifer',
              lastName: 'Janson',
              jobTitle: 'Senior partner',
              image: {
                url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png'
              }
            },
            {
              firstName: 'Claire',
              lastName: 'Claire',
              jobTitle: 'Associate Director',
              image: {
                url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png'
              }
            }
          ]
        },
        servicesCollection: {
          items: [
            {
              heroHeading: 'AI and Automation'
            },
            {
              heroHeading: 'Data Analytics'
            }
          ]
        }
      },
      {
        slug: 'test-insight-2',
        heroHeading: 'Ultricies commodo at nibh adipiscing mi. Tellus cursus rhoncus quisque enim.',
        heroImage: {
          url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png'
        },
        authorsCollection: {
          items: [
            {
              firstName: 'Kelly',
              lastName: 'Kardner',
              jobTitle: 'Senior Partner',
              image: {
                url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png'
              }
            },
            {
              firstName: 'Terry',
              lastName: 'Thurston',
              jobTitle: 'Senior Partner',
              image: {
                url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png'
              }
            }
          ]
        },
        servicesCollection: {
          items: [
            {
              heroHeading: 'Cloud Solutions'
            },
            {
              heroHeading: 'Cybersecurity'
            }
          ]
        }
      },
      {
        slug: 'test-insight-3',
        heroHeading: 'Insight 3 Heading',
        heroImage: {
          url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png'
        },
        authorsCollection: {
          items: [
            {
              firstName: 'Terry',
              lastName: 'Thurston',
              jobTitle: 'Senior Partner',
              image: {
                url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png'
              }
            },
            {
              firstName: 'Felix',
              lastName: 'Fering',
              jobTitle: 'Senior Partner',
              image: {
                url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png'
              }
            }
          ]
        },
        servicesCollection: {
          items: [
            {
              heroHeading: 'Machine Learning'
            },
            {
              heroHeading: 'AI Strategy'
            }
          ]
        }
      }
    ]
  },
  config: {
    heading: 'Insights Heading'
  }
}
