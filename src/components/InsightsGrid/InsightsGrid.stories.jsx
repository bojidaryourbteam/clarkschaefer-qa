import React from 'react'
import InsightsGrid from './InsightsGrid'

export default {
  title: 'Components/Insights Grid',
  component: InsightsGrid
}

const Template = args => <InsightsGrid {...args} />

export const Default = Template.bind({})
Default.args = {
  config: {
    heading: 'Insights Grid Heading'
  },
  referencesCollection: {
    items: [
      {
        slug: 'test-insight-1',
        heroHeading: 'Unleashing the potential of AI for enhanced efficiency and growth.',
        category: ['AI'],
        popular: true,
        servicesCollection: {
          items: [
            {
              heroHeading: 'Service 1'
            },
            {
              heroHeading: 'Service 2'
            }
          ]
        }
      },
      {
        slug: 'test-insight-2',
        heroHeading: 'Ultricies commodo at nibh adipiscing mi. Tellus cursus rhoncus quisque enim.',
        category: ['Tech'],
        popular: false,
        servicesCollection: {
          items: [
            {
              heroHeading: 'Service 3'
            },
            {
              heroHeading: 'Service 4'
            }
          ]
        }
      },
      {
        slug: 'test-insight-3',
        heroHeading: 'Insight 3 Heading',
        category: ['AI', 'Tech'],
        popular: true,
        servicesCollection: {
          items: [
            {
              heroHeading: 'Service 5'
            },
            {
              heroHeading: 'Service 6'
            }
          ]
        }
      }
    ]
  }
}
