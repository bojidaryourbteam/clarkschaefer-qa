import ServicesSelector from './ServicesSelector';

export default {
  title: 'Components/Services Selector',
  component: ServicesSelector,
};
const Template = (args) => <ServicesSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  config: {
    heading: 'This is Story Heading',
  },
  referencesCollection: {
    items: [
      {
        heroHeading: 'Accounting Operations',
        heroImage: {
          url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png',
        },
        heroSubheading:
          'Ut enim ad minima veniam, quis nostrum exercitationem, Ut enim ad minima veniam, quis nostrum exercitationem',
        slug: '#',
      },
      {
        heroHeading: 'Performance Improvement',
        heroImage: {
          url: 'https://images.ctfassets.net/45fgz00aw4jj/FNzT4adap87KdlurBX8J8/299e02fb553bcf8c2f3b1295b9c70061/image_hero.jpg',
        },
        heroSubheading: 'Ut enim ad minima veniam, quis nostrum exercitationem',
        slug: '#',
      },
      {
        heroHeading: 'Risk & Controls',
        heroImage: {
          url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png',
        },
        heroSubheading: 'Ut enim ad minima veniam, quis nostrum exercitationem',
        slug: '#',
      },
      {
        heroHeading: 'Technology Activation',
        heroImage: {
          url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png',
        },
        heroSubheading: 'Ut enim ad minima veniam, quis nostrum exercitationem',
        slug: '#',
      },
      {
        heroHeading: 'Technology Risk & Cybersecurity',
        heroImage: {
          url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png',
        },
        heroSubheading: 'Ut enim ad minima veniam, quis nostrum exercitationem',
        slug: '#',
      },
    ],
  },
};
