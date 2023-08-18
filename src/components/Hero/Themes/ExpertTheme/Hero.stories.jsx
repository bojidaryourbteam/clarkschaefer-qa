// hero.stories.jsx
import Hero from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
export const NoImage = Template.bind({});

Default.args = {
  heroHeading: 'Strategic leadership build on partnership',
  heroSubheading:
    'When elite organizations contend with growth, technology or risk, they call us.',
  heroImage: {
    url: 'https://images.ctfassets.net/45fgz00aw4jj/FNzT4adap87KdlurBX8J8/299e02fb553bcf8c2f3b1295b9c70061/image_hero.jpg',
  },
  heroCtasCollection: {
    items: [
      {
        internalTitle: 'Button 1',
        theme: 'text',
        url: 'https://example.com/button-1',
        label: 'Button 1',
      },
      {
        internalTitle: 'Button 2',
        theme: 'default',
        url: 'https://example.com/button-2',
        label: 'Button 2',
      },
      {
        internalTitle: 'Button 3',
        theme: 'outlined',
        url: 'https://example.com/button-3',
        label: 'Button 3',
      },
    ],
  },
  position: 'right',
  checkboxes: [],
};

NoImage.args = {
  heroHeading: 'Strategic leadership build on partnership',
  heroSubheading:
    'When elite organizations contend with growth, technology or risk, they call us.',
  heroImage: {
    url: '',
  },
  heroCtasCollection: {
    items: [],
  },
  position: 'left',
  checkboxes: [
    'Accounting Operations',
    'Performance Improvement',
    'Risk & Controls',
    'Technology Activation',
    'Technology Risk & Cybersecurity',
  ],
};
