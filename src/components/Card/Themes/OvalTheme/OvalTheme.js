import PropTypes from 'prop-types'
import Link from 'next/link'
import { card, card_img, card_heading, card_subheading, card_services, card_contacts, card_border, card_icon_email, card_icon_phone, card_icon_linkedin } from './OvalTheme.module.scss'

const OvalTheme = ({ image, heading, subheading, services, phone, email, linkedIn }) => {
  return (
    <div className={card}>
      <div style={{ backgroundImage: `url(${image.url})` }} className={card_img}></div>
      <div className={card_heading}>{heading}</div>
      <div className={card_subheading}>{subheading}</div>

      {(services || phone || email || linkedIn) && (
        <>
          <div className={card_border}></div>
          {services && (
            <div className={card_services}>
              {services.map((service, index) => (
                <div key={index}>{service}</div>
              ))}
            </div>
          )}

          {(phone || email || linkedIn) && (
            <div className={card_contacts}>
              {phone && (
                <div>
                  <Link href={`tel:${phone}`}>
                    <div className={card_icon_phone} aria-hidden='true'></div>
                  </Link>
                </div>
              )}
              {email && (
                <div>
                  <Link href={`mailto:${email}`}>
                    <div className={card_icon_email} aria-hidden='true'></div>
                  </Link>
                </div>
              )}
              {linkedIn && (
                <Link href='https://www.linkedin.com/' target='_blank' aria-label='Linkedin'>
                  <div className={card_icon_linkedin} aria-hidden='true'></div>
                </Link>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

OvalTheme.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  services: PropTypes.arrayOf(PropTypes.string),
  phone: PropTypes.string,
  email: PropTypes.string,
  linkedIn: PropTypes.string,
  image: PropTypes.shape({ url: PropTypes.string })
}

export default OvalTheme
