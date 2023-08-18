// Component.js
exports.component = (name) => `
import PropTypes from 'prop-types';

import { style } from './${name}.module.scss';


const ${name} = ({ test }) => {
  return (
    <div className={style}>
      {test}
    </div>
  );
};

${name}.propTypes = {
  /**
   * This is where you specify what the prop does
   */
  test: PropTypes.any
};

export default ${name};

`;

// Component.stories.jsx
exports.story = (name) => `
import ${name} from './${name}';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/${name}',
  component: ${name},
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <${name} {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  test: 'This is a test',
};

`;

// index.js
exports.index = (name) => `
import ${name} from './${name}';

export default ${name};

`;
