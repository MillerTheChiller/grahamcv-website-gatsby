import React from "react"
import styles from "./Button.module.css"
import cx from "classnames"

const Button = ({ isActive, onClick, buttonContent }) => {
  const buttonClass = cx(styles.button, isActive ? styles.activeButton : "")
  return (
    <button
      onClick={e => onClick(e.target.value)}
      className={buttonClass}
      type="button"
      value={buttonContent}
    >
      {buttonContent}
    </button>
  )
}

export default Button
