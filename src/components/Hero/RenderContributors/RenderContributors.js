import PropTypes from 'prop-types';
import Image from 'next/image';

import {
  contributors_wrapper,
  contributors,
} from './RenderContributors.module.scss';

const RenderContributors = (props) => {
  const { collection } = props;

  const isMoreThanOne = collection && collection.length > 1;

  return (
    <div className={contributors_wrapper}>
      <div
        className={contributors}
        style={{
          width: isMoreThanOne ? collection.length * 20 + 'px' : 100 + '%',
        }}
      >
        {collection?.length &&
          collection.map((contributor, index) => {
            return (
              <div
                key={`${contributor.firstName}${contributor.lastName}`}
                style={{
                  position: collection.length > 1 ? 'absolute' : 'static',
                  left: index * 20 + 'px',
                }}
              >
                <Image
                  alt="contributor_image"
                  src={contributor.image.url}
                  quality={100}
                  width={30}
                  height={30}
                  style={{
                    borderRadius: '50%',
                  }}
                />

                {collection.length === 1 && (
                  <span>
                    {contributor.firstName} {contributor.lastName}
                  </span>
                )}
              </div>
            );
          })}
      </div>
      {isMoreThanOne && <span>{`${collection.length} Contributors`}</span>}
    </div>
  );
};

RenderContributors.propTypes = {
  collection: PropTypes.array,
};

export default RenderContributors;
