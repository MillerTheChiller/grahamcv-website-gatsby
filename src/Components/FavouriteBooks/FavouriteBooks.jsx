import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FavouriteThing from "../FavouriteThing/FavouriteThing"
import styles from "./FavouriteBooks.module.css"

const FavouriteBooks = () => {
  const data = useStaticQuery(graphql`
    query BookQuery {
      books: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/things/things_content/books/" }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              link_to
              author
              type
            }
          }
        }
      }
    }
  `)

  const parsedArray = data.books.edges.map(element => {
    return element.node.frontmatter
  })

  return (
    <div className={styles.favouriteBooksWrapper}>
      {parsedArray &&
        parsedArray.map(element => {
          return <FavouriteThing component_type="book" dataPoint={element} />
        })}
      <a href="https://www.goodreads.com/user/show/106116259-graham">
        ...Find the rest on my Goodreads Account
      </a>
    </div>
  )
}

export default FavouriteBooks
