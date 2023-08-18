import React from 'react';  

import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  navigation: [
    {
      config: {
        items: [
          { title: "Link 1", url: "#" },
          { title: "Link 2", url: "#" },
          { title: "Link 3", url: "#" },
        ],
        logo: {
          image: {
            url: "https://place-hold.it/100",
          },
          heading: "Logo Heading",
          subheading: "Logo Subheading",
        },
      },
    },
  ],
};