import { PropTypes } from 'prop-types';


import {
  text_only_large_heading,
} from './TextOnlyLargeHeading.module.scss';

const TextOnlyLargeHeading = (props) => {
  const { heading, subheading} = props;

  return (
    <section className={text_only_large_heading}>
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </section>
  );
};

TextOnlyLargeHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
  }),
  url: PropTypes.string,
};

export default TextOnlyLargeHeading;
