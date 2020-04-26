import React from "react"
import PropTypes from "prop-types"
import styles from "./SplashPage.module.css"

const SplashPage = ({ splashPageData }) => {
  console.log(splashPageData)
  return (
    <div className={styles.splash}>
      <h1 className={styles.bigheader}>{splashPageData.frontmatter.title}</h1>
      <h3 className={styles.tagline}>{splashPageData.frontmatter.tagline}</h3>
    </div>
  )
}

SplashPage.propTypes = {
  splashPageData: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      tagline: PropTypes.string,
    }),
  }),
}

export default SplashPage
