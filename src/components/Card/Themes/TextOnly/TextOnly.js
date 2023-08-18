import { PropTypes } from 'prop-types';


import {
  text_only_theme,
} from './TextOnly.module.scss';

const TextOnly = (props) => {
  const { heading, subheading} = props;

  return (
    <div className={text_only_theme}>
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </div>
  );
};

TextOnly.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
  }),
  url: PropTypes.string,
};

export default TextOnly;
