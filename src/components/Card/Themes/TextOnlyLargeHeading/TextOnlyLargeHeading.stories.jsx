import TextOnlyLargeHeading from './index';
export default {
  title: 'Components/Card/TextOnlyLargeHeading',
  component: TextOnlyLargeHeading,
};

const Template = (args) => (
  <div style={{ maxWidth: 540 }}>
    <TextOnlyLargeHeading {...args} />
  </div>
);
export const Default = Template.bind({});

Default.args = {
  heading: '800+',
  subheading: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur quas dolore culpa odit corrupti repudiandae maiores ad, quo, vero, optio distinctin',
};
