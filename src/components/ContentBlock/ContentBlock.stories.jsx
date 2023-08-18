import React from 'react';
import ContentBlock from '../ContentBlock';

// This default export determines where your story goes in the story list
export default {
  title: 'ContentBlock',
  component: ContentBlock,
};

const Template = (args) => <ContentBlock {...args} />;

export const RightAligned = Template.bind({});
RightAligned.args = {
  config: {
    heading: 'Right Aligned Heading',
    textAlign: 'right',
  },
  referencesCollection: {
    items: [
      {
        content: {
          json: {
            content: [
              {
                content: [
                  {
                    value: 'This is some sample text that is aligned to the right.',
                  },
                ],
              },
            ],
          },
        },
      },
    ],
  },
};

export const LeftAligned = Template.bind({});
LeftAligned.args = {
  config: {
    heading: 'Left Aligned Heading',
    textAlign: 'left',
  },
  referencesCollection: {
    items: [
      {
        content: {
          json: {
            content: [
              {
                content: [
                  {
                    value: 'This is some sample text that is aligned to the left.',
                  },
                ],
              },
            ],
          },
        },
      },
    ],
  },
};

export const CenterAligned = Template.bind({});
CenterAligned.args = {
  config: {
    heading: 'Center Aligned Heading',
    textAlign: 'center',
  },
  referencesCollection: {
    items: [
      {
        content: {
          json: {
            content: [
              {
                content: [
                  {
                    value: 'This is some sample text that is aligned to the center.',
                  },
                ],
              },
            ],
          },
        },
      },
    ],
  },
};