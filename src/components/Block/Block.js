import React from 'react';
import PropTypes from 'prop-types';
import { RenderBlocks } from '@lib/flexibleUtils';
import GenericComponent from './GenericComponent';
import Row from './../../layout/Row/Row';
import Snippet from '../Snippet';
import Card from '../Card/Card';
import ContentBlock from './../ContentBlock/index';

// TODO map the components in the following object...
const ComponentMap = {
  // 'component-name': ComponentName,
  Card,
  Snippet,
  Row,
  ContentBlock,
};
const Block = (props) => {
  // If no data was passed, render nothing.
  if (!props) return null;
  // Name of the component to render comes from the componentMap
  // If the component is not found, render a generic component to
  // help devs visualize the flexible hierarchy
  const TagName = ComponentMap[props.template] || GenericComponent;

  // If the tag is not found, throw a console error
  if (!TagName) {
    console.error(`${props.template} mapping is not supported.`);
  }

  // Render the component
  return (
    <TagName {...props}>
      {TagName === 'div' && <span>{props.__typename}</span>}
      {props?.blocksCollection?.items &&
        RenderBlocks(props.blocksCollection.items)}
    </TagName>
  );
};

/**
 * This is open-ended. All other props pass-through this component directly to
 * the component.
 */
Block.propTypes = {
  blocksCollection: PropTypes.object,
  /**
   * The name of the component, which gets mapped to the actual component in
   * component-map.js.
   */
  template: PropTypes.string,
  __typename: PropTypes.string.isRequired,
};

Block.defaultProps = {};

export default Block;
