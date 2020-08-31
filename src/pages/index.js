import React from "react"
import Layout from "../Components/General/Layout/Layout"
import SplashPage from "../Components/SplashPage/SplashPage"
import About from "../Components/About/About"
import Hobbies from "../Components/Hobbies/Hobbies"
import { graphql } from "gatsby"

export default ({ data }) => {
  const splashPageData = data.splash.edges[0].node.frontmatter
  const aboutData = data.about.edges[0].node
  const hobbyData = data.hobbies.edges
  return (
    <Layout>
      <SplashPage splashPageData={splashPageData} />
      <About aboutData={aboutData} />
      <Hobbies hobbyData={hobbyData} />
    </Layout>
  )
}

export const query = graphql`
  {
    splash: allMarkdownRemark(
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
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
    hobbies: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/hobbies/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            personalLink
            personalLinkText
          }
          html
        }
      }
    }
  }
`
