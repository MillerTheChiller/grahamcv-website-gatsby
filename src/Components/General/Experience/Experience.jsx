import React from "react"
import styles from "./Experience.module.css"
const Experience = ({ location, about }) => {
  return (
    <div className={styles.experience}>
      <div className={styles.location}>
        <p> {location} </p>
      </div>
      <div className={styles.about}>
        <p> {about} </p>
      </div>
    </div>
  )
}

export default Experience
