import React from "react"
import styles from "./ButtonTab.module.css"
import cx from "classnames"

const ButtonTab = ({ buttonContent, onClick, tabActive }) => {
  const buttonClass = cx(
    styles.button,
    tabActive ? styles.active : styles.inactive
  )
  return (
    <button className={buttonClass} onClick={onClick && onClick} type="button">
      {buttonContent}
    </button>
  )
}

export default ButtonTab
