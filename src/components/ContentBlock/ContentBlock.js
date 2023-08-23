import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import { content_block } from './ContentBlock.module.scss';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      // Custom rendering for embedded entries
      return <div>{node.data.target.fields.title}</div>;
    },
  },
};

const ContentBlock = ({ content }) => {
  const renderedContent = documentToReactComponents(content?.json, options);
  return <div className={content_block}>{renderedContent}</div>;
};

ContentBlock.propTypes = {
  /**
   * HTML string to be rendered to the page.
   */
  content: PropTypes.object,
};

export default ContentBlock;
