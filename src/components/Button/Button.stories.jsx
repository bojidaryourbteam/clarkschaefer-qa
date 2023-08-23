import Button from './Button'
// import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'handleClick'
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Button {...args}>Click me!</Button>

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  theme: 'default',
  url: '/about',
  label: 'Click me'
}

export const Filter = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  theme: 'filter',
  url: '/about',
  label: 'Click me'
}

export const Outline = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outline.args = {
  theme: 'outlined',
  url: '/about',
  label: 'Click me'
}

export const Text = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  theme: 'text',
  url: '/about',
  label: 'Click me'
}

export const Arrow = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Arrow.args = {
  theme: 'arrow',
  url: '/about'
}
