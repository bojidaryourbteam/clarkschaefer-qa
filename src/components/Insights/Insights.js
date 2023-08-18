import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'
import RoundTheme from '@components/Card/Themes/RoundTheme'
// import Button from '@components/Button/Button';

import {
  container,
  insights_header,
  insights_title,
  insights_dropdown,
  dropdown_container,
  insights_card,
  dropdown_options
  // button__see_all
} from './Insights.module.scss'

const Insights = ({ referencesCollection, config }) => {
  console.log(referencesCollection)
  const heading = config.heading
  const [selectedService, setSelectedService] = useState('')
  const maxVisible = useRef(4)

  const services = referencesCollection.items.map(service => ({
    title: service.heroHeading,
    description: service.heroSubheading,
    url: service.slug,
    imageUrl: service.heroImage?.url,
    authorsCollection: service.authorsCollection,
    servicesCollection: service.servicesCollection
  }))

  const dropdownServices = services.flatMap(service => service.servicesCollection?.items.map(item => item.heroHeading))

  const serviceData = services.filter(service => selectedService === '' || service.servicesCollection?.items.some(item => item.heroHeading === selectedService))

  // const handleClick = () => {
  //   setMaxVisible(maxVisible + 4)
  // }

  return (
    <div className={container}>
      <div className={insights_header}>
        <div className={dropdown_container}>
          <select className={insights_dropdown} value={selectedService} onChange={e => setSelectedService(e.target.value)}>
            {Array.from(new Set(dropdownServices.filter(Boolean))).map((service, index) => (
              <option className={dropdown_options} key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
          <div className={insights_title}>{heading}</div>
          {/* {serviceData.length > maxVisible && (
            <div className={button__see_all}>
              <Button
                label="See all"
                internalTitle="See all"
                theme="text"
                handleClick={handleClick}
              />
            </div>
          )} */}
        </div>
      </div>
      <div className={insights_card}>
        {serviceData.slice(-maxVisible.current).map(service => (
          <RoundTheme key={service.url} slug={service.url} heroHeading={service.title} heroImage={{ url: service.imageUrl }} authorsCollection={service.authorsCollection} />
        ))}
      </div>
    </div>
  )
}

Insights.propTypes = {
  referencesCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        heroHeading: PropTypes.string,
        heroSubheading: PropTypes.string,
        slug: PropTypes.string,
        heroImage: PropTypes.shape({
          url: PropTypes.string
        }),
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
        servicesCollection: PropTypes.shape({
          items: PropTypes.arrayOf(
            PropTypes.shape({
              heroHeading: PropTypes.string
            })
          )
        })
      })
    )
  }),
  config: PropTypes.shape({
    heading: PropTypes.string
  })
}

export default Insights
