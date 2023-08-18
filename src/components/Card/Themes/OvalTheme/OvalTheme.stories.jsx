import Card from './OvalTheme';

export default {
  title: 'Components/Card/OvalTheme',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'dark',
  image: {
    url: 'https://images.unsplash.com/photo-1584515933487-779824d29309',
  },
  heading: 'Card Heading',
  subheading: 'Card Subheading',
  url: '/',
  backgroundColor: 'black',
};
