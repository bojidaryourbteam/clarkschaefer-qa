import React from 'react';

import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,

};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  navigation: [
    {
      config: {
        items: [
          {
            title: "Home",
            url: "/",
            dropdown: [
              {
                title: "SubItem1",
                url: "/subitem1"
              },
              {
                title: "SubItem2",
                url: "/subitem2"
              }
            ]
          },
          {
            title: "About",
            url: "/about"
          },
          {
            title: "Contact",
            url: "/contact"
          }
        ],
        logo: {
          image: {
            url: 'https://via.placeholder.com/150',
          },
          heading: 'Logo Heading',
          subheading: 'Logo Subheading'
        }
      }
    }
  ],
};