import React from 'react'
import { PropTypes } from 'prop-types'
import { toSnakeCase } from './../../lib/utils'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import { content_block__container, textAlign__right, textAlign__left, textAlign__center } from './ContentBlock.module.scss'

const ContentBlock = ({ config, referencesCollection }) => {
  const { heading, textAlign, anchor } = config
  const sectionId = toSnakeCase(anchor)

  // Access nested value
  const text = referencesCollection?.items[0]?.content?.json?.content[0]?.content[0]?.value

  // Determine CSS class to apply based on textAlign value
  let alignmentClass = ''
  if (textAlign === 'right') {
    alignmentClass = textAlign__right
  } else if (textAlign === 'left') {
    alignmentClass = textAlign__left
  } else if (textAlign === 'center') {
    alignmentClass = textAlign__center
  }

  const textToHtml = documentToHtmlString(referencesCollection?.items[0].content.json)
  const parseHtml = { __html: textToHtml }
  console.log(parseHtml)

  return (
    <section className={`${content_block__container} ${alignmentClass}`} id={sectionId}>
      <div>
        <h2>{heading}</h2>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </section>
  )
}

ContentBlock.propTypes = {
  config: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    textAlign: PropTypes.oneOf(['left', 'center', 'right']),
    anchor: PropTypes.string
  }).isRequired,
  referencesCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.shape({
          json: PropTypes.shape({
            content: PropTypes.arrayOf(
              PropTypes.shape({
                content: PropTypes.arrayOf(
                  PropTypes.shape({
                    value: PropTypes.string.isRequired
                  })
                )
              })
            )
          })
        })
      })
    )
  }).isRequired
}

export default ContentBlock
