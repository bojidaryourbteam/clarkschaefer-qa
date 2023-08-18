import { PropTypes } from 'prop-types';
import Card from '@components/Card/Card';
import { toSnakeCase } from './../../lib/utils';

import {
  our_firm_wrapper,
  our_firm,
  our_firm_list_one,
  our_firm_list_two,
} from './OurFirm.module.scss';

const OurFirm = (props) => {
  const ourFirmPartOne = props.referencesCollection?.items?.find(
    (item) => item.internalTitle === 'Our Firm Part 1'
  );
  const ourFirmPartTwo = props.referencesCollection?.items?.find(
    (item) => item.internalTitle === 'Our Firm Part 2'
  );

  const headingPartOne = ourFirmPartOne?.config?.heading;
  const itemsListPartOne = ourFirmPartOne.referencesCollection?.items;

  const headingPartTwo = ourFirmPartTwo?.config?.heading;
  const itemsListPartTwo = ourFirmPartTwo?.referencesCollection?.items;

  const sectionId = toSnakeCase(props.config.anchor);

  return (
    <section className={our_firm_wrapper} id={sectionId}>
      <span>Our Firm</span>
      <div className={our_firm}>
        <h1>{headingPartOne}</h1>
        <div className={our_firm_list_one}>
          {itemsListPartOne.map((entry) => {
            entry = {
              ...entry,
              heroHeading: headingPartOne,
              url: `/insights/${entry.slug}`,
            };
            return <Card key={entry.slug} {...entry} theme="round_theme" />;
          })}
        </div>
        <h4>{headingPartTwo}</h4>
        <div className={our_firm_list_two}>
          {itemsListPartTwo.map((entry) => {
            return <Card key={entry.heading} {...entry} theme="text_only" />;
          })}
        </div>
      </div>
    </section>
  );
};
OurFirm.propTypes = {
  config: PropTypes.shape({
    anchor: PropTypes.string.isRequired,
  }).isRequired,
  referencesCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        config: PropTypes.shape({
          heading: PropTypes.string.isRequired,
        }).isRequired,
        referencesCollection: PropTypes.shape({
          items: PropTypes.array.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
};
export default OurFirm;
