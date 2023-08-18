import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@components/Button/Button';
import {
  grid__container,
  dropdown__section,
  form__section,
  form__row,
  dropdown__options,
  dropdown__option,
  dropdown__title,
  form_button,
} from './Contact.module.scss';

const Contact = ({ config }) => {
  const [selectedItems, setSelectedItems] = useState('');
  const { items, cta } = config;
  console.log(cta)
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleItemsChange = (event) => {
    setSelectedItems(event.target.value);
  };

  return (
    <div className={grid__container}>
      <div className={dropdown__section}>
        <div className={dropdown__title}>
          <div>Talk to us about</div>
          <select
            className={dropdown__options}
            name="items"
            id="items"
            onChange={handleItemsChange}
            value={selectedItems}
          >
            {(items || []).map((item, index) => (
              <option
                className={dropdown__option}
                key={index}
                value={item.value}
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={form__section}>
        <form
          name={selectedItems}
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className={form__row}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="title" placeholder="Title" />
          </div>
          <div className={form__row}>
            <input type="text" name="company" placeholder="Company" />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className={form__section}>
            <textarea
              name="message"
              placeholder="What can we help you with?"
              required
            ></textarea>
          </div>
          <div className={form_button}>
            <Button
              type="submit"
              theme="default"
              url={cta?.url || '#'}
              label={cta?.label}
              handleClick={(e) => {
                e.preventDefault();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Contact.propTypes = {
  config: PropTypes.object,
};
export default Contact;
