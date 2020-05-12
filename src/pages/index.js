import React from "react"
import Layout from "../Components/General/Layout/Layout"
import SplashPage from "../Components/SplashPage/SplashPage"
import { graphql } from "gatsby"

export default ({ data }) => {
  const splashPageData = data.allMarkdownRemark.edges[0].node
  return (
    <Layout>
      <SplashPage splashPageData={splashPageData} />
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/splash-page/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            quickabout
            tagline
          }
        }
      }
    }
  }
`
