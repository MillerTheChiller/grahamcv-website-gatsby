import React from "react"
import PropTypes from "prop-types"

const Thing = ({ type, data }) => {
  let typeComponent
  switch (type) {
    case "book":
      // code block
      const featuredImgFluid = frontmatter.image_src.childImageSharp.fluid
      typeComponent = (
        <a target="_blank" href={link_to}>
          <Img fluid={featuredImgFluid} />
        </a>
      )
      break
    case "video":
      // code block
      typeComponent = (
        <iframe
          width="100%"
          height="200"
          src={link_to}
          frameBorder="0"
          allowTransparency
        ></iframe>
      )
      break
    case "spotify":
      // code block
      typeComponent = (
        <iframe
          src={data.link_to}
          width="100%"
          height="380"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      )
      break
    case "movie":
      // code block
      const featuredImgFluid = frontmatter.image_src.childImageSharp.fluid
      typeComponent = (
        <a target="_blank" href={link_to}>
          <Img fluid={featuredImgFluid} />
        </a>
      )
      break
    case "podcast":
      // code block
      const featuredImgFluid = frontmatter.image_src.childImageSharp.fluid

      typeComponent = (
        <a target="_blank" href={link_to}>
          <Img fluid={featuredImgFluid} />
        </a>
      )
      break
    case "blog":
      // code block
      const featuredImgFluid = frontmatter.image_src.childImageSharp.fluid

      typeComponent = (
        <a target="_blank" href={link_to}>
          <Img fluid={featuredImgFluid} />
        </a>
      )
      break
    case "other":
      // code block
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
}

Thing.propTypes = {}

export default Thing
