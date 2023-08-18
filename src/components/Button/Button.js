import PropTypes from 'prop-types'
import classNames from 'classnames'
import { button, theme_default, theme_outlined, theme_text, theme_arrow, theme_filter } from './Button.module.scss'
import Link from 'next/link'

const themeOptions = {
  default: theme_default,
  outlined: theme_outlined,
  text: theme_text,
  arrow: theme_arrow,
  filter: theme_filter
}

const Button = ({ internalTitle, label, theme, url, handleClick, className, type }) => {
  const classes = classNames(button, [themeOptions[theme]], className)

  return (
    <>
      {handleClick ? (
        <button type={type} onClick={handleClick} title={internalTitle} className={classes}>
          {label}
        </button>
      ) : (
        <Link href={url} title={internalTitle} className={classes}>
          {label}
        </Link>
      )}
    </>
  )
}

Button.propTypes = {
  theme: PropTypes.oneOf(['default', 'outlined', 'text', 'arrow', 'filter']),
  internalTitle: PropTypes.string,
  url: PropTypes.string,
  label: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string
}

export default Button
