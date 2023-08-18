import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    freeDrag: {
      control: 'boolean',
    },
    referencesCollection: {
      control: 'object',
    },
  },
};

const Template = (args) => <Carousel {...args} />;

const demoData = {
  items: [
    {
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'Software Engineer',
      image: {
        url: 'https://example.com/image.jpg',
      },
      servicesCollection: {
        items: [
          {
            heroHeading: 'Service 1',
          },
          {
            heroHeading: 'Service 2',
          },
        ],
      },
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  referencesCollection: demoData,
  freeDrag: false,
};

export const WithFreeDrag = Template.bind({});
WithFreeDrag.args = {
  referencesCollection: demoData,
  freeDrag: true,
};