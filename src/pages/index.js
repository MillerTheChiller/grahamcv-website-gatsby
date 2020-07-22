import React from "react"
import Layout from "../Components/General/Layout/Layout"
import ThingsWrapper from "../Components/ThingsWrapper/ThingsWrapper"
import SplashPage from "../Components/SplashPage/SplashPage"
import { graphql } from "gatsby"

export default ({ data }) => {
  const splashPageData = data.allMarkdownRemark.edges[0].node
  return (
    <Layout>
      <SplashPage splashPageData={splashPageData} />
      <ThingsWrapper />
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
            tagline
          }
        }
      }
    }
  }
`
