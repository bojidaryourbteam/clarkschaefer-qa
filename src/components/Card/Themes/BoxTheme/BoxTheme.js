import { PropTypes } from 'prop-types'
import Image from 'next/image'

import { square_item, square_item_img, square_item_img_textbox, square_item_contributors } from './BoxTheme.module.scss'

const BoxTheme = ({ authorsCollection, heroImage, heroHeading, style, style_big }) => {
  const contributor = authorsCollection?.items[0]

  return (
    <div className={square_item} style_big={style_big}>
      <div className={square_item_img}>
        <Image
          alt='hero-image'
          src={heroImage?.url}
          blurDataURL={heroImage?.url}
          // placeholder="blur"
          quality={100}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{
            objectFit: 'cover'
          }}
        />
        <div className={square_item_img_textbox} style={style}>
          <h1>{heroHeading}</h1>
          {contributor?.firstName && (
            <div className={square_item_contributors}>
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
        </div>
      </div>
    </div>
  )
}

BoxTheme.propTypes = {
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
  style: PropTypes.object,
  style_big: PropTypes.object
}

export default BoxTheme
