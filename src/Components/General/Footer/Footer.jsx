import React from "react"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <span
          aria-label="Cowboy Emoji"
          className={styles.footerEmojis}
          role="img"
        >
          🤠
        </span>
        <span
          aria-label="Canada Flag"
          className={styles.footerEmojis}
          role="img"
        >
          🇨🇦
        </span>
      </div>
    </div>
  )
}

export default Footer
