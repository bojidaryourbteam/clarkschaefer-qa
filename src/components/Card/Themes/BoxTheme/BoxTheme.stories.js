import BoxTheme from './BoxTheme';

export default {
  title: 'Components/Card/Box Theme',
  component: BoxTheme,
};

const Template = (args) => <BoxTheme {...args} />;
export const Default = Template.bind({});

Default.args = {
  slug: 'test-insight-1',
  heroHeading:
    'Unleashing the potential of AI for enhanced efficiency and growth.',
  heroImage: {
    url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png',
  },
  authorsCollection: {
    items: [
      {
        firstName: 'Jennifer',
        lastName: 'Janson',
        jobTitle: 'Senior partner',
        image: {
          url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png',
        },
      },
      {
        firstName: 'Claire',
        lastName: 'Claire',
        jobTitle: 'Associate Director',
        image: {
          url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png',
        },
      },
    ],
  },
};
