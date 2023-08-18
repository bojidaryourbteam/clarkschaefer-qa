import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { toSnakeCase } from './../../lib/utils'

import Icon from '@components/Icon'

import { navbar_wrapper, navbar, navbar_d, navbar_m, default_up, arrow_menu } from './SubNavBar.module.scss'

const SubNavBar = props => {
  const { data } = props
  const [openMenuTab, setOpenMenuTab] = useState(false)

  const router = useRouter()
  const { asPath } = router

  function extractSubNavItems(items) {
    const anchors = []

    for (const item of items) {
      if (item.config && item.config.anchor) {
        anchors.push(item.config.anchor)
      }

      if (item.referencesCollection && item.referencesCollection.items) {
        anchors.push(...extractSubNavItems(item.referencesCollection.items))
      }
    }

    return anchors.filter(Boolean)
  }

  const subNavList = extractSubNavItems(data?.entry?.blocksCollection?.items)

  function scrollToSection(sectionId) {
    if (typeof window !== 'undefined') {
      const section = document.getElementById(sectionId)

      if (section) {
        const rect = section.getBoundingClientRect()
        const subNavBarHeight = 60
        const yPosition = rect.top + window.scrollY - subNavBarHeight

        window.scrollTo({
          top: yPosition,
          behavior: 'smooth'
        })
      }
    }

    setOpenMenuTab(false)
  }

  const arrowIconClasses = classNames(arrow_menu, [openMenuTab && default_up])

  const generateSubNav = className => {
    return (
      <ul className={className}>
        {subNavList.length > 0 &&
          subNavList.map(anchor => {
            return (
              <li key={anchor}>
                <button onClick={() => scrollToSection(toSnakeCase(anchor))}>{anchor}</button>
              </li>
            )
          })}
      </ul>
    )
  }
  return (
    <div className={navbar_wrapper}>
      <div className={navbar}>
        <Link href='/about'>{asPath.replace('/', '')}</Link>
        <button onClick={() => setOpenMenuTab(!openMenuTab)} className={arrowIconClasses}>
          {!openMenuTab && <Icon type='arrow' name='default-down' />}
          {openMenuTab && <Icon type='arrow' name='default-up' />}
        </button>
        {generateSubNav(navbar_d)}
      </div>
      {openMenuTab && generateSubNav(navbar_m)}
    </div>
  )
}

SubNavBar.propTypes = {
  data: PropTypes.shape({
    entry: PropTypes.shape({
      blocksCollection: PropTypes.shape({
        items: PropTypes.arrayOf(
          PropTypes.shape({
            config: PropTypes.shape({
              anchor: PropTypes.string
            })
          })
        )
      })
    }).isRequired
  })
}
export default SubNavBar
