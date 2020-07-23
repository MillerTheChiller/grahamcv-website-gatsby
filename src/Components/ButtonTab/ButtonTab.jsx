import React from "react"
import styles from "./ButtonTab.module.css"

const ButtonTab = ({ buttonContent, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick && onClick}
      type="button"
    >
      {buttonContent}
    </button>
  )
}

export default ButtonTab
