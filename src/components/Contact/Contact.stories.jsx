import React from 'react';
import Contact from './Contact';

export default {
  title: 'Components/Contact',
  component: Contact,
};

const Template = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {
  config: {
    items: [
      { title: 'Inquiry 1', value: 'inquiry1' },
      { title: 'Inquiry 2', value: 'inquiry2' },
    ],
    cta: {
      url: '/contact',
      label: 'Submit',
    },
  },
};
