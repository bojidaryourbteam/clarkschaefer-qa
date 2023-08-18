import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useMediaQuery } from 'react-responsive'
import EmblaCarousel from 'embla-carousel'
import Button from '@components/Button/Button'
import OvalTheme from '../Card/Themes/OvalTheme/OvalTheme'
import { useRouter } from 'next/router'

import { container, experts_header, experts_title, experts_dropdown, experts_dropdown_slug, button__find, carousel__wrapper, card_decoration, embla, embla__slide, embla__container, button_prev, button_next, experts_dropdown_options, carousel_container } from './Carousel.module.scss'

const MyCarousel = ({ internalTitle, experts, freeDrag = false }) => {
  const router = useRouter()
  const emblaRef = useRef(null)
  const carouselRef = useRef(null)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState()
  const [nextBtnEnabled, setNextBtnEnabled] = useState()
  const [selectedService, setSelectedService] = useState('')

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 768 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 })
  const [isArrowShown, setIArrowShown] = useState(true)

  const handleChange = e => {
    setSelectedService(e.target.value)
  }

  useEffect(() => {
    if (isTabletOrMobile) {
      setIArrowShown(false)
    } else if (isDesktopOrLaptop) {
      setIArrowShown(true)
    }
  }, [isTabletOrMobile, isDesktopOrLaptop])

  const scrollPrev = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollPrev()
    }
  }, [carouselRef])

  const scrollNext = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollNext()
    }
  }, [carouselRef])

  const onSelect = useCallback(() => {
    if (!carouselRef.current) return
    setPrevBtnEnabled(carouselRef.current.canScrollPrev())
    setNextBtnEnabled(carouselRef.current.canScrollNext())
  }, [carouselRef])

  useEffect(() => {
    if (emblaRef.current) {
      const slideToShow = isDesktopOrLaptop ? 1 : 1
      carouselRef.current = EmblaCarousel(emblaRef.current, {
        loop: true,
        slidesToScroll: slideToShow,
        align: 'start',
        speed: 20,
        dragFree: freeDrag
      })
      onSelect()
      carouselRef.current.on('select', onSelect)
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.destroy()
      }
    }
  }, [emblaRef, onSelect, freeDrag, isDesktopOrLaptop, isTabletOrMobile])

  const transformParam = param => {
    if (!param) return
    const lowered = param.toLowerCase()
    const replacedDash = lowered.replace(/-/g, ' ')
    const replacedAmp = replacedDash.replace(/&/g, 'and')
    return replacedAmp
  }

  const param = router.query.slug
  const transformedParam = transformParam(param)

  const transformService = service => {
    if (!service) return
    const lowered = service.toLowerCase()
    const replacedDash = lowered.replace(/-/g, ' ')
    const replacedAmp = replacedDash.replace(/&/g, 'and')
    return replacedAmp
  }
  const expert = Array.from(new Set(experts.flatMap(expert => expert.servicesCollection.items.map(item => item.heroHeading))))

  const transformedExpert = expert.map(transformService)
  const matchedService = transformedExpert.find(service => service === transformedParam)

  const capitalizeText = text => {
    if (!text) return
    const words = text.split(' ')
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return capitalizedWords.join(' ').replace('And', '&')
  }
  const matchedServiceDisplay = capitalizeText(matchedService)

  const expertData = experts
    .filter(expert => {
      if (matchedServiceDisplay) {
        return expert.servicesCollection.items.some(item => item.heroHeading === matchedServiceDisplay)
      } else {
        return selectedService === '' || expert.servicesCollection.items.some(item => item.heroHeading === selectedService)
      }
    })
    .map(expert => ({
      name: `${expert.firstName} ${expert.lastName}`,
      title: expert.jobTitle,
      imageUrl: expert.image.url,
      services: expert.servicesCollection.items.map(item => item.heroHeading)
    }))

  return (
    <section className={container}>
      <span>{internalTitle}</span>
      <div className={button__find}>
        <Button url='/experts' label='FIND AN EXPERT' theme='text' internalTitle='' />
      </div>
      <div className={experts_header}>
        <div>
          <div className={experts_title}>The people you call for</div>
          {matchedService ? (
            <div className={experts_dropdown_slug}>
              <div>{matchedService}</div>
            </div>
          ) : (
            <select className={experts_dropdown} value={selectedService} onChange={handleChange}>
              <option className={experts_dropdown_options} value=''>
                Solutions you can trust
              </option>
              {expert.map(service => (
                <option className={experts_dropdown_options} key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <div className={carousel_container}>
        <div className={carousel__wrapper}>
          {isArrowShown && (
            <div className={button_prev}>
              <Button handleClick={scrollPrev} label='Prev' internalTitle='Previous' disabled={!prevBtnEnabled} theme='arrow' />
            </div>
          )}
          <div className={embla} ref={emblaRef}>
            <div className={embla__container}>
              {expertData.map((expert, index) => (
                <div className={embla__slide} key={index}>
                  <OvalTheme image={{ url: expert.imageUrl }} heading={expert.name} subheading={expert.title} />
                </div>
              ))}
            </div>
          </div>

          {isArrowShown && (
            <div className={button_next}>
              <Button handleClick={scrollNext} label='Next' internalTitle='Next' disabled={!nextBtnEnabled} theme='arrow' />
            </div>
          )}
        </div>
      </div>
      <div className={card_decoration}></div>
    </section>
  )
}

const Carousel = ({ internalTitle, referencesCollection, freeDrag }) => {
  const { items } = referencesCollection

  console.log(internalTitle)

  return <MyCarousel experts={items} freeDrag={freeDrag} internalTitle={internalTitle} />
}

MyCarousel.propTypes = {
  experts: PropTypes.arrayOf(
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
  ),
  internalTitle: PropTypes.string,
  freeDrag: PropTypes.bool
}

Carousel.propTypes = {
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
  }),
  internalTitle: PropTypes.string,
  freeDrag: PropTypes.bool
}

export default Carousel
