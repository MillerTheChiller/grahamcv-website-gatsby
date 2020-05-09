import React from "react"
import PropTypes from "prop-types"
import styles from "./FavouriteThing.module.css"
import Img from "gatsby-image"

const FavouriteThing = ({ favouriteThingData }) => {
  const media_type = favouriteThingData.node.frontmatter.type
  const { frontmatter } = favouriteThingData.node
  const { link_to, title } = frontmatter
  let typeComponent
  let featuredImgFluid
  let wrapperClass = styles.favouriteThingWrapper

  let component_type
  if (
    media_type === "book" ||
    media_type === "podcast" ||
    media_type === "movie" ||
    media_type === "game" ||
    media_type === "album"
  ) {
    component_type = "picture"
  } else if (media_type === "youtube") {
    component_type = "embedded"
  } else {
    component_type = "other"
  }

  switch (component_type) {
    case "picture":
      // code block
      featuredImgFluid = frontmatter.image_src.childImageSharp.fluid
      typeComponent = (
        <a target="_blank" href={link_to}>
          <Img fluid={featuredImgFluid} />
        </a>
      )
      break
    case "embedded":
      // code block
      typeComponent = (
        <iframe
          width="100%"
          height="200"
          src={link_to}
          frameBorder="0"
          allowtransparency="true"
        ></iframe>
      )
      break
    case "other":
      // code block
      const { subtitle } = frontmatter
      wrapperClass = styles.essayDisplay
      typeComponent = (
        <a target="_blank" href={link_to}>
          <div class={styles.box}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
          </div>
        </a>
      )
      break
    default:
    // code block
  }
  return <div className={wrapperClass}> {typeComponent} </div>
}

FavouriteThing.propTypes = {}

export default FavouriteThing
