import { PropTypes } from 'prop-types';
import Image from 'next/image';

import {
  light_background_item,
  light_background_item_img,
} from './LightBackGroundTheme.module.scss';
import Link from 'next/link';

const LightBackGroundTheme = (props) => {
  const { heading, subheading, image, url } = props;

  return (
    <div className={light_background_item}>
      <div className={light_background_item_img}>
        <Image
          alt="item_image"
          src={image?.url}
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h1>{heading}</h1>
      <p>{subheading}</p>
      {url && <Link href={image.url}>Explore</Link>}
    </div>
  );
};

LightBackGroundTheme.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
  }),
  url: PropTypes.string,
};

export default LightBackGroundTheme;
