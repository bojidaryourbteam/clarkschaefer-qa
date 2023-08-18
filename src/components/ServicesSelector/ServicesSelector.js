import { useState } from 'react';
import Image from 'next/image';

import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import Button from './../Button/Button';

import {
  services_selector,
  services_selector_heading,
  services_selector_img,
  services_selector_list,
  services_selector_info,
  active_item,
  accordion,
  accordion_item,
  accordion_item_heading,
  accordion_item_button,
  accordion_item_panel,
} from './ServicesSelector.module.scss';

const ServicesSelector = ({ config, referencesCollection }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const items = referencesCollection.items.filter((element) => {
    if (Object.keys(element).length !== 0) {
      return true;
    }

    return false;
  });

  return (
    <section className={services_selector}>
      <div className={services_selector_heading}>
        <span>Services</span>
        <h1>{config.heading}</h1>
      </div>
      <div className={services_selector_img}>
        <Image
          alt="services_image"
          src={items[activeImageIndex].heroImage.url}
          quality={100}
          fill
          priority
        />
      </div>
      <Accordion preExpanded={[`a${activeImageIndex}`]} className={accordion}>
        {items.map((item, index) => {
          return (
            <AccordionItem
              key={item.heroHeading + index}
              uuid={`a${index}`}
              className={accordion_item}
            >
              <AccordionItemHeading
                className={accordion_item_heading}
                onClick={() => setActiveImageIndex(index)}
              >
                <AccordionItemButton className={accordion_item_button}>
                  {item.heroHeading}
                </AccordionItemButton>
              </AccordionItemHeading>
              {item.heroSubheading && (
                <AccordionItemPanel className={accordion_item_panel}>
                  <p>{item.heroSubheading}</p>
                  <Button theme="outlined" url={item.slug} label="Explore" />
                </AccordionItemPanel>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
      {
        <ul className={services_selector_list}>
          {items.map((item, index) => (
            <li key={item.heroHeading + index}>
              <p>
                <button
                  onClick={() => setActiveImageIndex(index)}
                  className={activeImageIndex === index ? active_item : ''}
                >
                  {item.heroHeading}
                </button>
              </p>
            </li>
          ))}
        </ul>
      }
      {items[activeImageIndex].heroSubheading && (
        <div className={services_selector_info}>
          <p>{items[activeImageIndex].heroSubheading}</p>
          <Button
            url={items[activeImageIndex].slug}
            theme="outlined"
            label="Explore"
          />
        </div>
      )}
    </section>
  );
};

ServicesSelector.propTypes = {
  config: PropTypes.shape({
    heading: PropTypes.string.isRequired,
  }),
  referencesCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        heroHeading: PropTypes.string,
        heroImage: PropTypes.shape({
          url: PropTypes.string,
        }),
        heroSubheading: PropTypes.string,
        slug: PropTypes.string,
      })
    ),
  }),
};

export default ServicesSelector;
