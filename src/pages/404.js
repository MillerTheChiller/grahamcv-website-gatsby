import React from "react"
import Layout from "../Components/General/Layout/Layout"
import styles from "./notFound.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const NotFoundPage = ({ data }) => {
  const notFoundData = data.allMarkdownRemark.edges[0].node
  //const image = notFoundData.frontmatter.image_src.childImageSharp.fluid
  const image = notFoundData.frontmatter.image_src.childImageSharp.fluid
  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <Img className={styles.image} fluid={image} />
        <h1 className={styles.header}>{notFoundData.frontmatter.title}</h1>
        <p className={styles.subtitle}>{notFoundData.frontmatter.subtitle}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/not-found-page/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            image_src {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
export default NotFoundPage
