/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useState } from 'react'
import { container, navlink, navlink_active, nav__menu, nav__collapse, toggler__icon, toggle, logo_Img, logo_Title, logo_Text, logo_Heading, logo_SubHeading, dropdown, dropdown_content, navTextTitle, mobile__button_menu, mobile__button_back, dropdown_title, navlink_space, social_container, overlay, overlayActive } from './Header.module.scss'
import Icon from '@components/Icon'

const Header = ({ navigation = [] }) => {
  const [collapse, setCollapse] = useState(false)
  const [toggleIcon, setToggleIcon] = useState(false)
  const [dropdownVisible, setDropdownVisible] = useState({})
  const [dropdownHover, setDropdownHover] = useState(false)

  const router = useRouter()
  const currentPath = router.pathname

  if (!navigation[0] || !navigation[0].config) {
    return null
  }
  const { items, logo } = navigation[0].config

  const onToggle = () => {
    setCollapse(!collapse)
    setToggleIcon(!toggleIcon)
  }

  const toggleDropdown = index => {
    setDropdownVisible({
      ...dropdownVisible,
      [index]: !dropdownVisible[index]
    })
  }

  const handleMouseEnter = index => {
    if (window.innerWidth > 768) {
      setDropdownVisible({
        ...dropdownVisible,
        [index]: true
      })
      setDropdownHover(true)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setDropdownVisible({})
      setDropdownHover(false)
    }
  }

  const lineStyles = {
    default: {
      width: '25px',
      height: '2px',
      background: 'var(--color-gold)',
      margin: '5px 0px',
      transition: '0.3s ease'
    },
    toggled: {
      line1: {
        transform: 'translate(-5px, 7px) rotate(-45deg)'
      },
      line2: {
        opacity: 0
      },
      line3: {
        transform: 'translate(-5px, -7px) rotate(45deg)'
      }
    }
  }

  return (
    <header className={container}>
      <Link className={logo_Title} href='/'>
        <img className={logo_Img} src={logo.image.url} alt={logo.heading} />
        <div className={logo_Text}>
          <div className={logo_Heading}>{logo.heading.toUpperCase()}</div>
          <div className={logo_SubHeading}>{logo.subheading.toUpperCase()}</div>
        </div>
      </Link>
      <nav className={`${nav__menu} ${collapse ? nav__collapse : ''}`}>
        {items.map((item, index) => (
          <div className={dropdown} key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
            <Link className={currentPath === item?.url ? `${navlink} ${navlink_active}` : navlink} href={item?.url}>
              <span>{item.title}</span>
            </Link>
            {index === 0 && (
              <button className={mobile__button_menu} onClick={() => toggleDropdown(index)}>
                {/* &#8594; */}
              </button>
            )}
            {item.dropdown && dropdownVisible[index] && (
              <div className={dropdown_content}>
                <button className={mobile__button_back} onClick={() => toggleDropdown(index)}>
                  {' '}
                  <span>&#8592;</span> All
                </button>
                <h4 className={dropdown_title}>{items[0].title}</h4>
                {item.dropdown.map((dropItem, dropIndex) => (
                  <Link className={navlink_space} key={dropIndex} href={dropItem.url}>
                    <span className={navTextTitle}>{dropItem.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
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
      </nav>
      <button className={`${toggler__icon} ${toggleIcon ? toggle : ''}`} onClick={onToggle}>
        <div className='line__1' style={toggleIcon ? lineStyles.toggled.line1 : lineStyles.default}></div>
        <div className='line__2' style={toggleIcon ? lineStyles.toggled.line2 : lineStyles.default}></div>
        <div className='line__3' style={toggleIcon ? lineStyles.toggled.line3 : lineStyles.default}></div>
      </button>
      <div className={`${overlay} ${collapse ? overlayActive : ''}`}></div>
    </header>
  )
}

Header.propTypes = {
  navigation: PropTypes.array
}

export default Header
