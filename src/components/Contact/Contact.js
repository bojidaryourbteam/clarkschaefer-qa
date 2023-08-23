import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@components/Button/Button'
import { grid__container, dropdown__section, form__section, form__row, dropdown__options, dropdown__option, dropdown__title, form_button } from './Contact.module.scss'

const Contact = ({ config }) => {
  console.log('from contact form')
  const [selectedItems, setSelectedItems] = useState('')
  const { items, cta, heading } = config

  const handleSubmit = async event => {
    // Add async here
    event.preventDefault()
    const formData = new FormData(event.target)
    formData.append('access_key', process.env.W3_FORMS_ACCESS_KEY)

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: json
      })
      const result = await response.json()
      if (result.success) {
        console.log(result)
        // TODO: Handle success (e.g., navigate to a thank you page or show a success message)
      }
    } catch (error) {
      console.error('An error occurred:', error)
      // TODO: Handle error (e.g., show an error message to the user)
    }
  }

  const handleItemsChange = event => {
    setSelectedItems(event.target.value)
  }

  console.log(items)
  return (
    <div className={grid__container}>
      <div className={dropdown__section}>
        <div className={dropdown__title}>
          <div>{heading}</div>
          <select className={dropdown__options} name='items' id='items' onChange={handleItemsChange} value={selectedItems}>
            {(items || []).map((item, index) => (
              <option className={dropdown__option} key={index} value={item.value}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={form__section}>
        <form name={selectedItems} method='POST' data-netlify='true' onSubmit={handleSubmit}>
          <input type='hidden' name='form-name' value='contact' />
          <div className={form__row}>
            <input type='text' name='name' placeholder='Name' required />
            <input type='text' name='title' placeholder='Title' />
          </div>
          <div className={form__row}>
            <input type='text' name='company' placeholder='Company' />
            <input type='email' name='email' placeholder='Email' required />
          </div>
          <div className={form__section}>
            <textarea name='message' placeholder='What can we help you with?' required></textarea>
          </div>
          <div className={form_button}>
            <Button
              type='submit'
              theme='default'
              url={cta?.url || '#'}
              label={cta?.label}
              handleClick={e => {
                e.preventDefault()
              }}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

Contact.propTypes = {
  config: PropTypes.object
}
export default Contact
