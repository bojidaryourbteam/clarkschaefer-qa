import PropTypes from 'prop-types';
import OvalTheme from './Themes/OvalTheme';
import RoundTheme from './Themes/RoundTheme';
import BoxTheme from './Themes/BoxTheme/index';
import LightBackGroundTheme from './Themes/LightBackGroundTheme/LightBackGroundTheme';
import TextOnlyLargeHeading from './Themes/TextOnlyLargeHeading';
import TextOnly from './Themes/TextOnly';

const Card = (props) => {
  const { theme } = props;
  const cardLightTheme = 'light_background_theme';

  if (theme === 'oval_theme') return <OvalTheme {...props} />;
  if (theme === 'Round Image') return <RoundTheme {...props} />;
  if (theme === 'box_theme') return <BoxTheme {...props} />;
  if (theme === 'text_only_large_heading')
    return <TextOnlyLargeHeading {...props} />;
  if (theme === 'Text Only') return <TextOnly {...props} />;
  if (
    theme === 'light_background_theme' ||
    cardLightTheme === 'light_background_theme'
  )
    return <LightBackGroundTheme {...props} />;

  return null;
};

Card.propTypes = {
  theme: PropTypes.string,
};

export default Card;
