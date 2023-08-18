import React from 'react';
import ExpertsGrid from './ExpertsGrid';

export default {
  title: 'Components/ExpertsGrid',
  component: ExpertsGrid,
};

const Template = (args) => <ExpertsGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  referencesCollection: {
    items: [
      {
        firstName: 'Expert 1',
        lastName: '1ExpertLastName',
        jobTitle: 'Job Title',
        image: {
          url: 'https://images.unsplash.com/photo-1584515933487-779824d29309'
        },
        servicesCollection: {
          items: [
            { heroHeading: 'Service 1' },
            { heroHeading: 'Service 2' },
          ],
        },
      },
      {
        firstName: 'Expert 2',
        lastName: '2ExpertLastName',
        jobTitle: 'Job Title',
        image: {
          url: 'https://images.unsplash.com/photo-1584515933487-779824d29309'
        },
        servicesCollection: {
          items: [
            { heroHeading: 'Service 1' },
          ],
        },
      },
      {
        firstName: 'Expert 3',
        lastName: '3ExpertLastName',
        jobTitle: 'Job Title',
        image: {
          url: 'https://images.unsplash.com/photo-1584515933487-779824d29309'
        },
        servicesCollection: {
          items: [
            { heroHeading: 'Service 2' },
          ],
        },
      },
      {
        firstName: 'Expert 4',
        lastName: '4ExpertLastName',
        jobTitle: 'Job Title',
        image: {
          url: 'https://images.unsplash.com/photo-1584515933487-779824d29309'
        },
        servicesCollection: {
          items: [
            { heroHeading: 'Service 2' },
          ],
        },
      },
    ],
  },
  internalTitle: 'Test title',
};