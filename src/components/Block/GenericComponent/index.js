import React from 'react';
import PropTypes from 'prop-types';
import { RenderBlocks } from '@lib/flexibleUtils';

const GenericComponent = ({ __typename, blocksCollection }) => {
  return (
    <fieldset>
      <legend>{__typename}</legend>
      {blocksCollection?.items && RenderBlocks(blocksCollection.items)}
    </fieldset>
  );
};

GenericComponent.propTypes = {
  __typename: PropTypes.string.isRequired,
  blocksCollection: PropTypes.any,
};

export default GenericComponent;
