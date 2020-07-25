import React from "react"
import SpecificHobby from "../SpecificHobby/SpecificHobby"
import styles from "./Hobbies.module.css"

const Hobbies = ({ hobbyData }) => {
  const hobbyArray = hobbyData.map(element => {
    return {
      title: element.node.frontmatter.title,
      personalLink: element.node.frontmatter.personalLink,
      personalLinkText: element.node.frontmatter.personalLinkText,
      html: element.node.html,
    }
  })
  return (
    <div className={styles.detailContainer}>
      <h1>What I like Doing / What Interests Me</h1>
      <p> Not really a hobby but I've been pretty into craisins recently. </p>
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
