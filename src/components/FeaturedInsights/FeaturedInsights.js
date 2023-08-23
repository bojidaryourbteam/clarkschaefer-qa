import { PropTypes } from 'prop-types';
import Card from '../Card/Card';

import {
  featured_insights_wrapper,
  featured_insights,
  featured_insights_collection,
} from './FeaturedInsights.module.scss';

const FeaturedInsights = ({ referencesCollection }) => {
  const squareItem = referencesCollection.items[0];
  const roundItems = referencesCollection.items.slice(1);

  return (
    <section className={featured_insights_wrapper}>
      <span>Featured Insights</span>
      <div className={featured_insights}>
        <Card {...squareItem} theme="box_theme" />
        <div className={featured_insights_collection}>
          {roundItems.map((entry) => (
            <Card key={entry.slug} {...entry} theme="Round Image" />
          ))}
        </div>
      </div>
    </section>
  );
};

FeaturedInsights.propTypes = {
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
export default FeaturedInsights;
