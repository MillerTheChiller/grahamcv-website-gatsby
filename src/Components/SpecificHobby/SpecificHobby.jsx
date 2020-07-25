import React from "react"
import styles from "./SpecificHobby.module.css"

const SpecificHobby = ({ title, personalLink, personalLinkText, html }) => {
  return (
    <div className={styles.hobbyWrapper}>
      <div className={styles.hobbyHeader}>
        <p className={styles.title}>
          {title} {personalLinkText && "- "}
          {personalLinkText && (
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={personalLink}
            >
              {personalLinkText}
            </a>
          )}
        </p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default SpecificHobby
