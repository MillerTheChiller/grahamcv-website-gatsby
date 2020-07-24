import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FavouriteThing from "../FavouriteThing/FavouriteThing"
import styles from "./FavouriteAlbums.module.css"

const FavouriteAlbums = () => {
  const data = useStaticQuery(graphql`
    query AlbumQuery {
      albums: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/things/things_content/music/" }
        }
      ) {
        edges {
          node {
            frontmatter {
              link_to
              type
              artist
              album
            }
          }
        }
      }
    }
  `)

  const parsedArray = data.albums.edges.map(element => {
    return element.node.frontmatter
  })

  return (
    <>
      <div className={styles.start}>
        <a href="https://www.goodreads.com/user/show/106116259-graham">
          My Spotify Page
        </a>
        <p className={styles.secondaryLine}>(All my playlists)</p>
      </div>
      {parsedArray &&
        parsedArray.map(element => {
          return <FavouriteThing component_type="album" dataPoint={element} />
        })}
    </>
  )
}

export default FavouriteAlbums
