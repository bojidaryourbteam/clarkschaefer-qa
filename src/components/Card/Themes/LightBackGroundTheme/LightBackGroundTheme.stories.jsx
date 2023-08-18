import LightBackGroundTheme from './index';
export default {
  title: 'Components/Card/Light BackGround Theme',
  component: LightBackGroundTheme,
};

const Template = (args) => (
  <div style={{ maxWidth: 540 }}>
    <LightBackGroundTheme {...args} />
  </div>
);
export const Default = Template.bind({});

Default.args = {
  heading: 'Aliqua excepteur esse aliqua non',
  subheading: 'Ex deserunt ipsum nulla fugiat cillum ex',
  image: {
    url: 'https://images.ctfassets.net/45fgz00aw4jj/1GM2daENZj16ImxbgM15w0/452caf53879396ca75621a76382d3b23/Fotor_AI__1_.png',
  },
  url: '#',
};
