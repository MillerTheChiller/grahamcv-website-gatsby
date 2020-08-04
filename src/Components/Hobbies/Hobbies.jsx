import React from "react"
import SpecificHobby from "../SpecificHobby/SpecificHobby"
import styles from "./Hobbies.module.css"
import { useStaticQuery, graphql } from "gatsby"

const Hobbies = ({ hobbyData }) => {
  const hobbyArray = hobbyData.map(element => {
    return {
      title: element.node.frontmatter.title,
      personalLink: element.node.frontmatter.personalLink,
      personalLinkText: element.node.frontmatter.personalLinkText,
      html: element.node.html,
    }
  })

  const { tagline, title } = useStaticQuery(graphql`
    {
      interests: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/interests/" } }
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
  `).interests.edges[0].node.frontmatter
  return (
    <div className={styles.detailContainer}>
      <h1>{title}</h1>
      <p>{tagline}</p>
      {hobbyArray.map(element => {
        const { title, personalLink, personalLinkText, html } = element
        return (
          <SpecificHobby
            title={title}
            personalLink={personalLink}
            personalLinkText={personalLinkText}
            html={html}
          />
        )
      })}
    </div>
  )
}

export default Hobbies
