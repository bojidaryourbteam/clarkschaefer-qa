import Card from './OvalTheme'

export default {
  title: 'Components/Card/OvalTheme',
  component: Card
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  theme: 'dark',
  image: {
    url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png'
  },
  heading: 'Card Heading',
  subheading: 'Card Subheading',
  url: '/',
  backgroundColor: 'black'
}
