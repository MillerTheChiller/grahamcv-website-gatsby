import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
const Header = () => {
  const data = useStaticQuery(graphql`
    {
      header: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/header/" } }
      ) {
        edges {
          node {
            frontmatter {
              leftContent
              linkedin
              github
              email
            }
          }
        }
      }
    }
  `)
  const {
    leftContent,
    linkedin,
    github,
    email,
  } = data.header.edges[0].node.frontmatter
  return (
    <div className="navbar header">
      <div className="name">
        <Link to="/">{leftContent}</Link>
      </div>
      <div className="navlinks">
        {linkedin && (
          <div>
            <a className="headerLlnk" href={linkedin}>
              LinkedIn
            </a>
          </div>
        )}
        {github && (
          <div>
            <a className="headerlink" href={github}>
              GitHub
            </a>
          </div>
        )}
        {email && (
          <div>
            <a className="headerlink" href={email}>
              Email
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
