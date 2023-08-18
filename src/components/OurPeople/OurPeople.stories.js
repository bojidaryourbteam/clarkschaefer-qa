import OurPeople from './OurPeople';

export default {
  title: 'Components/Our People',
  component: OurPeople,
};
const Template = (args) => <OurPeople {...args} />;

export const Default = Template.bind({});

Default.args = {
  referencesCollection: {
    items: [
      {
        internalTitle: 'Our People Row Part 1',
        blocksCollection: {
          items: [
            {
              textAlign: 'left',
              content: {
                json: {
                  nodeType: 'document',
                  data: {},
                  content: [
                    {
                      nodeType: 'paragraph',
                      data: {},
                      content: [
                        {
                          nodeType: 'text',
                          value:
                            'Semper venenatis ac nisi pretium. Vitae eleifend nibh elit quisque.',
                          marks: [],
                          data: {},
                        },
                      ],
                    },
                  ],
                },
              },
            },
            {
              heading: 'Diversity and Inclusion',
              subheading:
                'In morbi amet vivamus. Purus justo consequat ullamcorper nulla.',
              url: '#',
            },
            {
              heading: 'Experts',
              subheading:
                'Sagittis diam urna dignissim amet aenean et lorem blandit. Convallis ut tortor lacus in.',
              url: '#',
            },
            {
              heading: 'Social Impact',
              subheading:
                'Libero in morbi amet vivamus. Purus justo consequat ullamcorper nulla.',
              url: '#',
            },
          ],
        },
      },
      {
        config: null,
        referencesCollection: {
          items: [
            {
              textAlign: 'left',
              content: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'Semper venenatis ac nisi pretium. Vitae eleifend nibh elit quisque.\n',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
              },
              ctasCollection: {
                items: [
                  {
                    internalTitle: 'Our People Snippet Part 2 Content CTA',
                    label: 'Explore careers',
                    url: '#',
                    theme: 'text',
                  },
                ],
              },
            },
            {
              content: {
                json: {
                  nodeType: 'document',
                  data: {},
                  content: [
                    {
                      nodeType: 'paragraph',
                      data: {},
                      content: [
                        {
                          nodeType: 'text',
                          value:
                            'Cursus neque sit in augue nunc eget habitasse fermentum. Elit elit aliquam et fusce amet.',
                          marks: [],
                          data: {},
                        },
                      ],
                    },
                  ],
                },
              },
              textAlign: 'left',
              ctasCollection: {
                items: [],
              },
            },
            {
              firstName: 'Claire',
              lastName: 'Calipso',
              jobTitle: 'Associate Director',
              image: {
                url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png',
              },
            },
          ],
        },
      },
    ],
  },
};
