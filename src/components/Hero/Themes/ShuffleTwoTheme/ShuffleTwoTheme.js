import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from './../../../Button/Button';
import RenderContributors from './../../RenderContributors/index';

import {
  hero,
  hero_content,
  hero_image,
  hero_image_wrapper,
  hero_content_border,
  hero_textbox,
  hero_info,
  hero_wrapper,
  hero_card_item,
  hero_card_item_img,
  hero_card_item_text,
  reading_time,
  decoration,
  decoration_m,
  button_wrapper,
} from './ShuffleTwoTheme.module.scss';

const ShuffleTwoTheme = ({
  heroButtons,
  heroInsightsLandingCollection,
  blocksCollection,
}) => {
  const bigBox = heroInsightsLandingCollection.items[0];
  const smallBox = heroInsightsLandingCollection.items[1];

  const bigBoxContributors = bigBox?.authorsCollection.items.slice(0, 1);
  const smallBoxContributors = smallBox?.authorsCollection.items.slice(0, 1);

  const bigBoxTitle =
    blocksCollection.items[0].referencesCollection.items[0].servicesCollection
      .items[0].heroHeading;

  const bigBoxReadingTime = bigBox.readingTime;
  const bigPublishedTime = bigBox.publishedAt;

  const formatDate = (dateToFormat) => {
    const date = new Date(dateToFormat);

    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    var dateString =
      date.getDate() +
      ' ' +
      monthNames[date.getMonth()] +
      ', ' +
      date.getFullYear();

    return dateString;
  };

  return (
    <section className={hero_wrapper}>
      <div className={hero}>
        <div className={hero_content}>
          <div className={hero_image_wrapper}>
            <div className={hero_image}>
              <div>
                <Image
                  alt="hero_image"
                  src={bigBox?.heroImage?.url}
                  priority
                  quality={100}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className={decoration_m}></div>
            <div className={hero_card_item}>
              <Image
                className={hero_card_item_img}
                alt="hero_card_image"
                src={smallBox?.heroImage?.url}
                quality={100}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: 'cover',
                }}
              />
              <div className={hero_card_item_text}>
                <h1>{smallBox?.heroHeading}</h1>
                <RenderContributors collection={smallBoxContributors} />
              </div>
            </div>
          </div>
          <span className={hero_content_border}></span>
        </div>
        <div className={hero_textbox}>
          <span>{`${bigBoxTitle} case study`}</span>
          <h1>{bigBox?.heroHeading}</h1>
          <div className={hero_info}>
            <p>{bigBox?.heroSubheading}</p>
            <div className={button_wrapper}>
              {heroButtons?.length > 0 &&
                heroButtons.map((item) => {
                  return <Button key={item.label} {...item} />;
                })}
            </div>
            <div className={reading_time}>
              <span>{formatDate(bigPublishedTime)}</span>
              <span>{bigBoxReadingTime}</span>
            </div>

            <RenderContributors collection={bigBoxContributors} />
          </div>
        </div>
      </div>
      <div className={decoration}></div>
    </section>
  );
};

export default ShuffleTwoTheme;

ShuffleTwoTheme.propTypes = {
  heroButtons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  heroInsightsLandingCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        readingTime: PropTypes.string,
        publishedAt: PropTypes.string,
        authorsCollection: PropTypes.shape({
          items: PropTypes.arrayOf(
            PropTypes.shape({
              firstName: PropTypes.string.isRequired,
              lastName: PropTypes.string.isRequired,
              image: PropTypes.shape({
                url: PropTypes.string.isRequired,
              }).isRequired,
            })
          ),
        }),
        heroImage: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
        heroHeading: PropTypes.string,
        heroSubheading: PropTypes.string,
      })
    ),
  }),
  blocksCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        referencesCollection: PropTypes.shape({
          items: PropTypes.arrayOf(
            PropTypes.shape({
              servicesCollection: PropTypes.shape({
                items: PropTypes.arrayOf(
                  PropTypes.shape({
                    heroHeading: PropTypes.string.isRequired,
                  })
                ),
              }),
            })
          ),
        }),
      })
    ),
  }),
};
