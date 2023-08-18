import Image from 'next/image'
import { PropTypes } from 'prop-types'

import { round_item, round_item_img, round_item_textbox, round_item_contributors, explore_btn } from './RoundTheme.module.scss'
import Button from '@components/Button/Button'

const RoundTheme = ({ authorsCollection, slug, heroHeading, heroImage, url }) => {
  const contributor = authorsCollection && authorsCollection.items[0]

  return (
    <div key={slug} className={round_item}>
      <div className={round_item_img}>
        <Image
          alt='hero_image'
          src={heroImage.url}
          quality={100}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{
            borderRadius: '50%'
          }}
        />
      </div>
      <div className={round_item_textbox}>
        <h1>{heroHeading}</h1>
        {contributor && contributor.firstName && (
          <div className={round_item_contributors}>
            <Image
              alt='contributor_image'
              src={contributor.image.url}
              quality={100}
              width={30}
              height={30}
              style={{
                borderRadius: '50%'
              }}
            />
            <div>
              <span>
                {contributor.firstName} {contributor.lastName}
              </span>
              <span>{contributor.jobTitle}</span>
            </div>
          </div>
        )}
        {url && <Button className={explore_btn} theme='text' label='explore' url={url} />}
      </div>
    </div>
  )
}

RoundTheme.propTypes = {
  authorsCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        jobTitle: PropTypes.string,
        image: PropTypes.shape({
          url: PropTypes.string
        })
      })
    )
  }),
  heroHeading: PropTypes.string,
  heroImage: PropTypes.shape({
    url: PropTypes.string
  }),
  slug: PropTypes.string,
  url: PropTypes.string
}
export default RoundTheme
