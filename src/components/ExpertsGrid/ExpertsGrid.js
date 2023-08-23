import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import OvalTheme from '../Card/Themes/OvalTheme/OvalTheme'
import Button from '@components/Button/Button'
import { debounce } from 'lodash'
import Image from 'next/image'

import { container, container_filters, button__see_more, grid__wrapper, grid__container, grid__item, checkbox__wrapper, checkbox__input, checkbox__label, search__input, button__find, search__wrapper, button__find__contact, filters__logo, search__icon, separator, checkbox_container, filter_img } from './ExpertsGrid.module.scss'

const ExpertsGrid = ({ referencesCollection, internalTitle }) => {
  console.log(internalTitle)
  const experts = referencesCollection?.items
  const [selectedServices, setSelectedServices] = useState([])
  const [showCount, setShowCount] = useState(4)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCount, setFilterCount] = useState(0)
  const [showSolutions, setShowSolutions] = useState(false)

  const services = Array.from(new Set(experts.flatMap(expert => expert.servicesCollection.items?.map(item => item.heroHeading))))

  const handleServiceChange = event => {
    const service = event.target.name

    if (event.target.checked) {
      setFilterCount(prevCount => Math.min(prevCount + 1, services.length))
    } else {
      setFilterCount(prevCount => Math.max(prevCount - 1, 0))
    }

    setSelectedServices(prevSelected => {
      if (prevSelected.includes(service)) {
        return prevSelected.filter(s => s !== service)
      } else {
        return [...prevSelected, service]
      }
    })
  }

  const debounceSearch = useCallback(
    debounce(value => setSearchTerm(value), 300),
    []
  )

  const handleSearchChange = event => {
    debounceSearch(event.target.value)
  }

  const filteredExperts = experts.filter(expert =>
    selectedServices.length === 0
      ? // filters by first and last name
        expert.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || expert.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      : expert.servicesCollection?.items.some(item => selectedServices.includes(item.heroHeading)) &&
        // filters by first and last name
        (expert.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || expert.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const myStyle = {
    marginRight: '12px',
    marginLeft: '12px'
  }

  return (
    <section>
      <div className={container_filters}>
        <div className={filters__logo}>
          <div className={search__wrapper}>
            <input type='text' className={search__input} placeholder='Search Expert' onChange={handleSearchChange} />
            <div className={search__icon}></div>
          </div>
          <Button
            theme='filter'
            url='#'
            internalTitle='Filter by Solution'
            handleClick={() => setShowSolutions(!showSolutions)}
            label={
              <>
                Filter by Solution
                <Image className={filter_img} src='/images/icons/icon-filter-vector.svg' alt='Image description' width={20} height={20} style={myStyle} />
                {filterCount > 0 && <span>{filterCount}</span>}
              </>
            }
          ></Button>
        </div>
        <div>
          {showSolutions && (
            <ul className={showSolutions ? `${checkbox__wrapper} show` : checkbox__wrapper}>
              <div>Solution</div>
              {services
                .sort((a, b) => a.localeCompare(b)) // Sorting alphabetically
                .sort((a, b) => selectedServices.includes(a) - selectedServices.includes(b)) // Moving checked to the bottom
                .map((service, index) => (
                  <li key={service} className={selectedServices.includes(service) && index === services.length - selectedServices.length ? `${separator}` : ''}>
                    <label className={checkbox_container}>
                      <input type='checkbox' id={service} name={service} className={checkbox__input} onChange={handleServiceChange} checked={selectedServices.includes(service)} />
                      <span></span>
                      <label className={checkbox__label}>{service}</label>
                    </label>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>

      <div className={container}>
        <span>OUR PEOPLE</span>
        <div className={button__find}></div>
        <div className={grid__wrapper}>
          <div className={grid__container}>
            {filteredExperts.length > 0 ? (
              filteredExperts.slice(0, showCount).map((expert, index) => (
                <div className={grid__item} key={index}>
                  <OvalTheme image={{ url: expert.image?.url }} heading={`${expert.firstName} ${expert.lastName}`} subheading={expert.jobTitle} services={expert.servicesCollection?.items.map(item => item.heroHeading)} phone={expert.phone} jobTitle={expert.jobTitle} email={expert.email} linkedIn={expert.linkedinUrl} />
                </div>
              ))
            ) : (
              <div>
                No experts found from this search. <br></br>Please try again.
              </div>
            )}
          </div>
          <div>
            {showCount < filteredExperts.length && (
              <div className={button__see_more}>
                <Button handleClick={() => setShowCount(count => count + 4)} label='See More' internalTitle='See More' theme='text' />
              </div>
            )}
            <div className={button__find__contact}>
              Want help finding an expert? <Button url='/connect' label='CONTACT US' theme='text' internalTitle='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ExpertsGrid.propTypes = {
  internalTitle: PropTypes.string,
  referencesCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        jobTitle: PropTypes.string,
        image: PropTypes.shape({
          url: PropTypes.string
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
  })
}

export default ExpertsGrid
