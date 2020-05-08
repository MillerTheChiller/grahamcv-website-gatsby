import React from "react"
import Layout from "../Components/Layout/Layout"
import styles from "./thingsAll.module.css"
import FavouriteThing from "../Components/FavouriteThing/FavouriteThing"
import { graphql } from "gatsby"

const ThingsAll = ({ data }) => {
  const books = data.books.edges
  const podcast = data.podcasts.edges
  const music = data.music.edges
  const youtube = data.youtube.edges
  const blogs = data.blogs.edges
  const movies = data.movies.edges
  const games = data.games.edges
  const other = data.other.edges
  return (
    <Layout>
      <div class={styles.columns}>
        <div class={styles.column}>
          <FavouriteThing favouriteThingData={books[4]} />
          <FavouriteThing favouriteThingData={youtube[0]} />
          <FavouriteThing favouriteThingData={music[0]} />
          <FavouriteThing favouriteThingData={podcast[0]} />
        </div>

        <div class={styles.column}>
          <FavouriteThing favouriteThingData={music[1]} />
          <FavouriteThing favouriteThingData={books[0]} />
          <FavouriteThing favouriteThingData={youtube[1]} />
          <FavouriteThing favouriteThingData={music[2]} />
        </div>

        <div class={styles.column}>
          <FavouriteThing favouriteThingData={blogs[0]} />
          <FavouriteThing favouriteThingData={movies[0]} />
          <FavouriteThing favouriteThingData={games[0]} />
          <FavouriteThing favouriteThingData={books[2]} />
          <FavouriteThing favouriteThingData={other[0]} />
        </div>
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
    music: allMarkdownRemark(
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
    youtube: allMarkdownRemark(
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
export default ThingsAll
