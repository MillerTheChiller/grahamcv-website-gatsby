import React from "react"
import styles from "./about.module.css"

const About = ({ aboutData }) => {
  const { frontmatter, html } = aboutData
  const { firstdraft, title } = frontmatter
  console.log(html)
  return (
    <div className={styles.detailsContainer}>
      <h1>{title}</h1>
      <p className={styles.firstTake}>{firstdraft}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default About
