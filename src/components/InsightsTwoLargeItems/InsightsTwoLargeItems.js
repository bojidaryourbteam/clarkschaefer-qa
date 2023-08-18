import { PropTypes } from 'prop-types';
import Card from '../Card/Card';
import Button from '@components/Button/Button';

import {
  insights,
  insights_collection,
  button_wrapper,
} from './InsightsTwoLargeItems.module.scss';

const InsightsTwoLargeItems = ({ referencesCollection }) => {
  const items = referencesCollection.items.slice(0, 2);

  return (
    <section className={insights}>
      <span>Featured Insights</span>
      <div className={insights_collection}>
        {items.map((entry) => (
          <Card key={entry.slug} {...entry} theme="box_theme" />
        ))}
      </div>
      <div className={button_wrapper}>
        <Button label="see all" theme="text" url="#" />
      </div>
    </section>
  );
};

InsightsTwoLargeItems.propTypes = {
  referencesCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        authorsCollection: PropTypes.shape({
          items: PropTypes.arrayOf(
            PropTypes.shape({
              firstName: PropTypes.string,
              lastName: PropTypes.string,
              jobTitle: PropTypes.string,
              image: PropTypes.shape({
                url: PropTypes.string,
              }),
            })
          ),
        }),
        heroHeading: PropTypes.string,
        heroImage: PropTypes.shape({
          url: PropTypes.string,
        }),
        slug: PropTypes.string,
      })
    ),
  }),
};
export default InsightsTwoLargeItems;
