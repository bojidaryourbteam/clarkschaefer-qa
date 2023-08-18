import PropTypes from 'prop-types'

import { container, logo_Img, logo_Title, logo_Text, logo_Heading, logo_SubHeading, footer_right, navlink, container_footer, container_links, container_links_tradeMark, footerPolicy, social_container, container_text, footer_title, subscription__Input, trade_mark, footer_arrow, subscribe__box } from './Footer.module.scss'
import Link from 'next/link'
import Icon from '@components/Icon'

const Footer = ({ navigation = [] }) => {
  if (!navigation[1] || !navigation[1].config) {
    return null
  }
  const { items, logo } = navigation[1].config

  return (
    <footer className={container}>
      <div className={container_footer}>
        <div className={logo_Title}>
          <img className={logo_Img} src={logo.image.url} alt={logo.heading} />
          <div className={logo_Text}>
            <div className={logo_Heading}>{logo.heading.toUpperCase()}</div>
            <div className={logo_SubHeading}>{logo.subheading.toUpperCase()}</div>
          </div>
        </div>
        <div className={container_text}>
          <div className={footer_title}>
            <span>Get regular insights</span>
            <br></br>
            <span>critical to your business.</span>
          </div>
          <label className={subscribe__box}>
            <input className={subscription__Input} type='text' placeholder='Your email' />
            <button>
              Subscribe
              <span className={footer_arrow}></span>
            </button>
          </label>
        </div>
      </div>
      <div className={container_links}>
        <nav className={footer_right}>
          {items.map((item, index) => (
            <a key={index} className={navlink} href={item.url}>
              {item.title}
            </a>
          ))}
        </nav>
        <div className={social_container}>
          <Link href='https://www.linkedin.com/' target='_blank' aria-label='Linkedin'>
            <Icon type='social' name='linkedin' />
          </Link>
          <Link href='https://twitter.com/' target='_blank' aria-label='Twitter'>
            <Icon type='social' name='twitter' />
          </Link>
          <Link href='https://www.facebook.com/' target='_blank' aria-label='Facebook'>
            <Icon type='social' name='facebook' />
          </Link>
        </div>
      </div>
      <div className={container_links_tradeMark}>
        <div className={trade_mark}>© Clark Schaelfer Consulting {new Date().getFullYear()}</div>
        <div className={footerPolicy}>
          <Link href='/cookie-preferences'>Cookie Preferences</Link>
          <Link href='/privacy-policy'>Privacy Policy</Link>
          <Link href='/terms-of-use'>Terms of use</Link>
          <Link href='/accessibility'>Accessibility</Link>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  navigation: PropTypes.array
}

export default Footer
