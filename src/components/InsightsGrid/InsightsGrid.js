import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Link from 'next/link'
import BoxTheme from '@components/Card/Themes/BoxTheme'
import SmallBoxTheme from '@components/Card/Themes/SmallBoxTheme/SmallBoxTheme'
import Button from '@components/Button/Button'
import { container, header_section, insights_grid__container, popular_insights, upper_cards, lower_cards, header_section__button, header_section__filter, show_more_button, popular_insights_title, button__filter } from './InsightsGrid.module.scss' // Import styles

const InsightsGrid = ({ config, referencesCollection }) => {
  const [filter, setFilter] = useState('all')
  const [showCount, setShowCount] = useState(4)

  const heading = config.heading
  console.log(referencesCollection)
  const filterOptions = ['all', ...Array.from(new Set(referencesCollection?.items.flatMap(item => item.category)))]

  // const filterOptions = Array.from(new Set(referencesCollection.items.flatMap(item => item.servicesCollection.items.map(service => service.heroHeading))))

  const filteredData = filter === 'all' ? referencesCollection.items : referencesCollection.items.filter(item => item.category.includes(filter))
  const popularItems = referencesCollection.items
    .filter(item => item.popular === true)
    .map(item => {
      // Mapping logic goes here if needed...
      return item
    })

  const handleShowMore = () => {
    setShowCount(prevCount => prevCount + 4)
  }

  return (
    <div className={container}>
      <div className={header_section}>
        <h1>{heading}</h1>
        <div className={header_section__filter}>
          {filterOptions.map(option => (
            <div key={option} className={header_section__button}>
              <button className={button__filter} onClick={() => setFilter(option)} label={option} theme='text'>
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={insights_grid__container}>
        <div className={upper_cards}>
          {filteredData.slice(0, 2).map(item => (
            <SmallBoxTheme key={item.slug} {...item} style_big={{ maxWidth: '395px', maxHeight: '300px' }} style={{ maxWidth: '350px' }} />
          ))}
        </div>

        <div className={popular_insights}>
          <div className={popular_insights_title}>
            <Button url='#' key='' label='POPULAR INSIGHTS' theme='text' />
          </div>
          {popularItems.map(popularItem => (
            <Link key={popularItem.slug} href={`/insights/${popularItem.slug}`} passHref>
              <h3>{popularItem.heroHeading}</h3>
              <p>{popularItem.category.join(', ')}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className={lower_cards}>
        {filteredData.slice(2, showCount).map(item => (
          <BoxTheme key={item.slug} {...item} />
        ))}
      </div>

      <div className={show_more_button}>{showCount < filteredData.length && <Button label='See all' internalTitle='See all' theme='text' handleClick={handleShowMore} />}</div>
    </div>
  )
}

InsightsGrid.propTypes = {
  config: PropTypes.shape({
    heading: PropTypes.string
  }),
  referencesCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string,
        heroHeading: PropTypes.string,
        category: PropTypes.string,
        servicesCollection: PropTypes.shape({
          items: PropTypes.arrayOf(
            PropTypes.shape({
              heroHeading: PropTypes.string
            })
          )
        })
      })
    )
  })
}

export default InsightsGrid
