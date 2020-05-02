import React from "react"
import PropTypes from "prop-types"
import Layout from "../Components/Layout/Layout"
import styles from "./things.module.css"
import Img from "gatsby-image"

const Things = ({ data }) => {
  console.log(data)
  const books = data.books.edges
  const podcast = data.podcasts.edge
  const { frontmatter } = books[3].node
  const featuredImgFluid = frontmatter.image_src.childImageSharp.fluid
  return (
    <Layout>
      <div class={styles.columns}>
        <div class={styles.column}>
          <a target="_blank" href={frontmatter.link_to}>
            <Img alt={frontmatter.title} fluid={featuredImgFluid} />
          </a>

          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/GWenb9Noq_A"
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://open.spotify.com/embed/album/6fFp2F91noBeodV88bRwTD"
            width="100%"
            height="380"
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>

          <a
            target="_blank"
            href="http://philosophizethis.org/category/episode/"
          >
            <img src="PhiloThis.jpg" />
          </a>
        </div>

        <div class={styles.column}>
          <iframe
            src="https://open.spotify.com/embed/artist/12Zk1DFhCbHY6v3xep2ZjI"
            width="100%"
            height="380"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
          <a
            target="_blank"
            href="https://www.goodreads.com/book/show/18693669-the-organized-mind"
          >
            <img src="orgMind.jpg" />
          </a>

          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/IdTMDpizis8"
            frameBorder="0"
            allowTransparency
          ></iframe>

          <iframe
            src="https://open.spotify.com/embed/album/6y9QkSGMnFRJRbKzh0j91A"
            width="100%"
            height="380"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>

        <div class={styles.column}>
          <a target="_blank" href="https://waitbutwhy.com/">
            <img src="WBW.png" />
          </a>

          <a target="_blank" href="http://www.imdb.com/title/tt0829482/">
            <img src="Superbad.png" />
          </a>

          <a target="_blank" href="https://stardewvalley.net/about/">
            <img src="stardew.jpg" />
          </a>

          <a
            target="_blank"
            href="https://www.amazon.com/Aimless-Love-New-Selected-Poems/dp/0679644059"
          >
            <img src="aimlessLove.jpg" />
          </a>

          <a
            target="_blank"
            href="https://edoras.sdsu.edu/~vinge/misc/singularity.html"
          >
            <div class={styles.box}>
              <h1>Vernor Vinge</h1>
              <h3>The Singularity</h3>
            </div>
          </a>
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
  }
`

export default Things
