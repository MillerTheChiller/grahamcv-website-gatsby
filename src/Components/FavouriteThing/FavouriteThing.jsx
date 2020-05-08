import React from "react"
import PropTypes from "prop-types"
import styles from "./FavouriteThing.module.css"
import Img from "gatsby-image"

const FavouriteThing = ({ favouriteThingData }) => {
  const type = favouriteThingData.node.frontmatter.type
  const { frontmatter } = favouriteThingData.node
  const { link_to, title } = frontmatter
  let typeComponent
  let featuredImgFluid
  switch (type) {
    case "book":
      // code block
      featuredImgFluid = frontmatter.image_src.childImageSharp.fluid
      typeComponent = (
        <a target="_blank" href={link_to}>
          <Img fluid={featuredImgFluid} />
        </a>
      )
      break
    case "youtube":
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
    case "music":
      // code block
      typeComponent = (
        <iframe
          src={link_to}
          width="100%"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      )
      break
    case "movie":
      // code block
      featuredImgFluid = frontmatter.image_src.childImageSharp.fluid
      typeComponent = (
        <a target="_blank" href={link_to}>
          <Img fluid={featuredImgFluid} />
        </a>
      )
      break
    case "podcast":
      // code block
      featuredImgFluid = frontmatter.image_src.childImageSharp.fluid

      typeComponent = (
        <a target="_blank" href={link_to}>
          <Img fluid={featuredImgFluid} />
        </a>
      )
      break
    case "blog":
      // code block
      featuredImgFluid = frontmatter.image_src.childImageSharp.fluid

      typeComponent = (
        <a target="_blank" href={link_to}>
          <Img fluid={featuredImgFluid} />
        </a>
      )
      break
    case "game":
      // code block
      featuredImgFluid = frontmatter.image_src.childImageSharp.fluid

      typeComponent = (
        <a target="_blank" href={link_to}>
          <Img fluid={featuredImgFluid} />
        </a>
      )
      break
    case "other":
      // code block
      const { subtitle } = frontmatter
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
  return typeComponent
}

FavouriteThing.propTypes = {}

export default FavouriteThing
