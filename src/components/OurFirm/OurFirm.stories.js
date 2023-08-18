import OurFirm from './index';
export default {
  title: 'Components/Our Firm',
  component: OurFirm,
};

const Template = (args) => <OurFirm {...args} />;
export const Default = Template.bind({});

Default.args = {
  referencesCollection: {
    items: [
      {
        config: {
          heading: 'Malesuada aliquam sit morbi at enim tortor eget tincidunt.',
        },
        referencesCollection: {
          items: [
            {
              slug: 'test-insight-1',
              heroImage: {
                url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png',
              },
            },
            {
              slug: 'test-insight-2',
              heroImage: {
                url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png',
              },
            },
            {
              slug: 'test-insight-3',
              heroImage: {
                url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png',
              },
            },
            {
              slug: 'test-insight-4',
              heroImage: {
                url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png',
              },
            },
          ],
        },
      },
      {
        config: {
          heading:
            'Our values adipiscing non egestas ultrices facilisi pretium volutpat massa. Eu eu gravida et diam et sollicitudin phasellus velit consequat.',
        },
        referencesCollection: {
          items: [
            {
              heading: 'Respect',
              subheading:
                'Purus egestas elementum odio sit pharetra sed. Mi neque est vulputate vitae.',
            },
            {
              heading: 'Excellence',
              subheading:
                'Et morbi sit in ultricies in lacus sed purus massa. Eros dui ipsum vivamus morbi non.',
            },
            {
              heading: 'Accountability',
              subheading:
                'Tristique ut maecenas nibh tellus auctor. Mauris donec id ultrices urna urna ut.',
            },
            {
              heading: 'Leadership',
              subheading:
                'Facilisis non ut vulputate tortor id. Netus pretium congue amet purus.',
            },
          ],
        },
      },
    ],
  },
};
