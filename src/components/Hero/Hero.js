import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import classNames from 'classnames'

import ShuffleTwoTheme from './Themes/ShuffleTwoTheme'
import RenderContributors from './RenderContributors/RenderContributors'

import { hero, hero_content, hero_content_border, hero_textbox, hero_wrapper, play_btn, decoration, reading_time, button_wrapper, theme_left, theme_left_small, theme_right } from './Hero.module.scss'

const themeOptions = {
  homepage: theme_right,
  aboutpage: theme_right,
  services_landing: theme_left,
  services_detail: theme_right,
  insights_detail: theme_left_small
}

const Hero = ({ heroHeading, heroSubheading, heroImage, heroVideo, heroCtasCollection, heroInsightsLandingCollection, blocksCollection, authorsCollection, theme, readingTime, publishedAt }) => {
  heroHeading = 'Et felis eu egestas  facilisis interdum praesent.'
  heroSubheading = 'Vitae venenatis vel euismod sed quam ac eget a. Vitae ut ut cursus egestas sollicitudin venenatis ac.'

  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const videoRef = useRef(null)

  const isInsightsLandingTheme = theme === 'insights_landing'
  const isInsightsDetailTheme = theme === 'insights_detail'

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedData = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const togglePlay = () => {
    if (isVideoPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsVideoPlaying(!isVideoPlaying)
  }

  useEffect(() => {
    if (videoRef.current) {
      if (duration === parseFloat(currentTime)) {
        setIsVideoPlaying(false)
      }
    }
  }, [currentTime])

  const formatDate = dateToFormat => {
    const date = new Date(dateToFormat)

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var dateString = date.getDate() + ' ' + monthNames[date.getMonth()] + ', ' + date.getFullYear()

    return dateString
  }

  const heroMediaContent = heroVideo?.url ? (
    <>
      <video ref={videoRef} onClick={togglePlay} onTimeUpdate={handleTimeUpdate} onLoadedData={handleLoadedData}>
        <track kind='captions' label='English' />
        <source src={heroVideo.url} type='video/mp4' />
      </video>
      {!isVideoPlaying && <button onClick={togglePlay} className={play_btn}></button>}
    </>
  ) : (
    <Image alt='hero' src={heroImage?.url} priority quality={100} fill />
  )

  const heroButtons = heroCtasCollection.items.slice(heroCtasCollection.items.length - 2) || []

  const classes = classNames(hero_wrapper, [themeOptions[theme]])

  return (
    <>
      {isInsightsLandingTheme && <ShuffleTwoTheme heroInsightsLandingCollection={heroInsightsLandingCollection} blocksCollection={blocksCollection} heroButtons={heroButtons} />}
      {!isInsightsLandingTheme && (
        <section className={classes}>
          <div className={decoration}></div>
          <div className={hero}>
            <div className={hero_content}>
              {heroMediaContent}
              <span className={hero_content_border}></span>
            </div>
            <div className={hero_textbox}>
              <h1>{heroHeading}</h1>
              <div>
                {isInsightsDetailTheme && authorsCollection?.items.length && (
                  <>
                    <div className={reading_time}>
                      <span>{formatDate(publishedAt)}</span>
                      <span>{readingTime}</span>
                    </div>
                    <div>
                      <RenderContributors collection={authorsCollection.items} />
                    </div>
                  </>
                )}
                {!isInsightsDetailTheme && <p>{heroSubheading}</p>}
                <div className={button_wrapper}>
                  {heroButtons.length > 0 &&
                    heroButtons.map(item => {
                      return <Button key={item.label} {...item} />
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

Hero.propTypes = {
  heroHeading: PropTypes.string.isRequired,
  heroSubheading: PropTypes.string.isRequired,
  heroImage: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  heroVideo: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  heroCtasCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        theme: PropTypes.string,
        internalTitle: PropTypes.string
      })
    ).isRequired
  }).isRequired,
  readingTime: PropTypes.string,
  publishedAt: PropTypes.string,
  heroInsightsLandingCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        authorsCollection: PropTypes.shape({
          items: PropTypes.arrayOf(
            PropTypes.shape({
              firstName: PropTypes.string.isRequired,
              lastName: PropTypes.string.isRequired,
              image: PropTypes.shape({
                url: PropTypes.string.isRequired
              }).isRequired
            })
          )
        }),
        heroImage: PropTypes.shape({
          url: PropTypes.string.isRequired
        }),
        heroHeading: PropTypes.string,
        heroSubheading: PropTypes.string
      })
    )
  }),
  blocksCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        referencesCollection: PropTypes.shape({
          items: PropTypes.arrayOf(
            PropTypes.shape({
              servicesCollection: PropTypes.shape({
                items: PropTypes.arrayOf(
                  PropTypes.shape({
                    heroHeading: PropTypes.string.isRequired
                  })
                )
              })
            })
          )
        })
      })
    )
  }),
  authorsCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        image: PropTypes.shape({
          url: PropTypes.string.isRequired
        }).isRequired
      })
    )
  }),
  theme: PropTypes.oneOf(['homepage', 'services_landing', 'services_detail', 'insights_landing', 'insights_detail']),
  checkboxes: PropTypes.arrayOf(PropTypes.string)
}
export default Hero
