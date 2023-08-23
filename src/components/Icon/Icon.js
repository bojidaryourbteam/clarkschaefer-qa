import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';

// ---------------------------------------------------------

import iconOptions from './icon-options';

// ---------------------------------------------------------

import { svg_container } from './Icon.module.scss';

// ---------------------------------------------------------

const Icon = ({ name, type, className, title }) => {
  return (
    <ReactSVG
      className={classNames(svg_container, className)}
      title={title || name}
      src={`/images/icons/icons-${type}-${name}.svg`}
    />
  );
};

Icon.propTypes = {
  /**
   * Specifies the title of the SVG
   */
  title: PropTypes.string,

  /**
   * Specifies the name of icon
   */
  name: PropTypes.string,

  /**
   * Specifies the type of icon
   */
  type: PropTypes.oneOf(iconOptions.map((t) => t.type)),
};

Icon.defaultProps = {};

export default Icon;
