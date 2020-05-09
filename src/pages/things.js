import React, { useState } from "react"
import Layout from "../Components/General/Layout/Layout"
import StyledSelect from "../Components/StyledSelect/StyledSelect"
import ThingsDisplay from "../Components/ThingsDisplay/ThingsDisplay"
import styles from "./things.module.css"
import { amount_options, type_options } from "../utils/constants"
import { graphql } from "gatsby"
import Button from "../Components/General/Button/Button"

function Things({ data }) {
  const [amount, setAmount] = useState(amount_options[0])
  const [type, setType] = useState(type_options[0])
  console.log(amount)
  return (
    <Layout>
      <div className={styles.thingsQueryRow}>
        <h1>What {amount === "all" ? "are" : "is"}</h1>
        <div className={styles.selectWrapper}>
          <Button
            onClick={setAmount}
            isActive={"one" === amount}
            buttonContent="one"
          />
          <Button
            onClick={setAmount}
            isActive={"all" === amount}
            buttonContent="all"
          />
        </div>
        <h1> of your favourite </h1>
        <div className={styles.selectWrapper}>
          <StyledSelect
            updateValue={setType}
            isMenuOpen={false}
            data={type_options}
          />
        </div>
        <h1>?</h1>
      </div>
      <div className={styles.thingsQueryReturn}>
        <ThingsDisplay amount={amount} thingData={data[type.value]} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    books: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/things/things_content/books/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            image_src {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link_to
            type
          }
        }
      }
    }
    blogs: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/things/things_content/blogs/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            link_to
            type
          }
        }
      }
    }
    games: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/things/things_content/games/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            image_src {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link_to
            type
          }
        }
      }
    }
    movies: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/things/things_content/movies/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            image_src {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link_to
            type
          }
        }
      }
    }
    podcasts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/things/things_content/podcasts/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            image_src {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link_to
            type
          }
        }
      }
    }
    musicians: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/things/things_content/music/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            link_to
            type
          }
        }
      }
    }
    videos: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/things/things_content/youtube/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            link_to
            type
          }
        }
      }
    }
    other: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/things/things_content/other/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            link_to
            type
          }
        }
      }
    }
  }
`

export default Things
