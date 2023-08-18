import React from 'react';
import PropTypes from 'prop-types';
import Button from '@components/Button/Button';
import classNames from 'classnames';

import {
  hero,
  hero_content,
  hero_content_border,
  hero_textbox,
  hero_filters,
  hero_wrapper,
  play_btn,
  decoration,
  no_image,
  button_wrapper,
  theme_left,
  theme_right,
} from './Hero.module.scss';

const themeOptions = {
  right: theme_right,
  left: theme_left,
};

const Hero = ({
  heroHeading,
  heroSubheading,
  position = 'right',
  checkboxes = [
    // 'Accounting Operations',
    // 'Performance Improvement',
    // 'Risk & Controls',
    // 'Technology Activation',
    // 'Technology Risk & Cybersecurity',
  ],
}) => {


  const classes = classNames(hero_wrapper, [
    themeOptions[position],
    showHeroFilters > 0 && no_image,
  ]);
  const heroFilters = (
    <div className={hero_filters}>
      <span className={hero_content_border}></span>
      <h3>Filter Experts by Service Area</h3>
      <ul>
        {checkboxes.map((checkbox) => (
          <li key={checkbox}>
            <input id={checkbox} type="checkbox" />
            <label htmlFor={checkbox}>{checkbox}</label>
          </li>
        ))}
      </ul>
      <div>
        <p>Want help finding an expert?</p>
        <Button
          url="#"
          label="see all"
          theme="text"
          internalTitle="hero-filter-btn"
        />
      </div>
    </div>
  );

  return (
    <section>
      <div className={classes}>
        <div className={decoration}></div>
        <div className={hero}>
          {showHeroFilters && heroFilters}
          {!showHeroFilters && (
            <div
              className={hero_content}
              // style={{ backgroundImage: `url(${heroImage.url})` }}
            >
              {heroContent}
              <span className={hero_content_border}></span>
            </div>
          )}
          <div className={hero_textbox}>
            <h1>{heroHeading}</h1>
            <div>
              <p>{heroSubheading}</p>
              <div className={button_wrapper}>
                {heroButtons.length > 0 &&
                  heroButtons.map((item) => {
                    return <Button key={item.label} {...item} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

Hero.propTypes = {
  heroHeading: PropTypes.string,
  heroSubheading: PropTypes.string,
  heroImage: PropTypes.shape({ url: PropTypes.string }),
  heroVideo: PropTypes.shape({ url: PropTypes.string }),
  heroCtasCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        internalTitle: PropTypes.string,
        label: PropTypes.string,
        url: PropTypes.string,
        theme: PropTypes.oneOf(['default', 'outlined', 'text']),
      })
    ),
  }),
  position: PropTypes.oneOf(['left', 'right']),
  checkboxes: PropTypes.arrayOf(PropTypes.string),
};
