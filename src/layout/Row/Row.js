import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import {
  row_container,
  margin_top_none,
  margin_top_small,
  margin_top_medium,
  margin_top_large,
  columns_one,
  columns_two,
  columns_four,
  column_classes,
} from './Row.module.scss';

const marginTopOptions = {
  none: margin_top_none,
  small: margin_top_small,
  medium: margin_top_medium,
  large: margin_top_large,
};

const columnCountOptions = {
  1: columns_one,
  2: columns_two,
  4: columns_four,
};
const Row = ({
  children,
  columnCount,
  heading,
  subheading,
  label,
  marginTop,
}) => {
  const rowClasses = classNames(row_container, marginTopOptions[marginTop]);

  const columnClasses = classNames(
    column_classes,
    columnCountOptions[columnCount]
  );
  console.log(marginTop);
  return (
    <section className={rowClasses}>
      {label && <span>{label}</span>}
      {heading && <h1>{heading}</h1>}
      {subheading && <h2>{subheading}</h2>}
      <div className={columnClasses}>{children}</div>
    </section>
  );
};

Row.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  columnCount: PropTypes.number,
  marginTop: PropTypes.string,
};

export default Row;
