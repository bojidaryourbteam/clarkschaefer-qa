import TextOnly from './index';
export default {
  title: 'Components/Card/TextOnly',
  component: TextOnly,
};

const Template = (args) => (
  <div style={{ maxWidth: 540 }}>
    <TextOnly {...args} />
  </div>
);
export const Default = Template.bind({});

Default.args = {
  heading: 'Respect',
  subheading: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur quas dolore culpa odit corrupti repudiandae maiores ad, quo, vero, optio distinctin',
};
