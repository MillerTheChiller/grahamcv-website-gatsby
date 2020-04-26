import React from "react"
import { graphql } from "gatsby"

import Layout from "../Components/Layout/Layout"
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.title}</h3>
          <h3>{node.frontmatter.tagline}</h3>
          <h5>{node.frontmatter.date}</h5>
          {node.excerpt}
        </div>
      ))}
      <div>This is cool!!</div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tagline
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
