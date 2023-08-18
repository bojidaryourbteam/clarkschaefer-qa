import { row_container, text_only_large_heading } from './Row.module.scss';
import { PropTypes } from 'prop-types';

const Row = ({ children }) => {
  const theme = children?.[1]?.[0]?.props?.theme;

  const rowClasses =
    theme === 'text_only_large_heading'
      ? text_only_large_heading
      : row_container;

  return <section className={rowClasses}>{children}</section>;
};

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;
