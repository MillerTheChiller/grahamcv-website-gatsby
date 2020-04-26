import React from "react"
import PropTypes from "prop-types"
import Layout from "../Components/Layout/Layout"
import styles from "./things.module.css"

const Things = ({ data }) => {
  const things_data = data.allMarkdownRemark.edges
  const { frontmatter } = things_data[0].node
  console.log(frontmatter)
  return (
    <Layout>
      <div class={styles.columns}>
        <div class={styles.column}>
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray"
          >
            <img src={frontmatter.image_src} />
          </a>

          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/GWenb9Noq_A"
            frameborder="0"
            allowfullscreen
          ></iframe>

          <iframe
            src="https://open.spotify.com/embed/album/6fFp2F91noBeodV88bRwTD"
            width="100%"
            height="380"
            frameborder="0"
            allowtransparency="true"
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
            frameborder="0"
            allowtransparency="true"
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
            frameborder="0"
            allowfullscreen
          ></iframe>

          <iframe
            src="https://open.spotify.com/embed/album/6y9QkSGMnFRJRbKzh0j91A"
            width="100%"
            height="380"
            frameborder="0"
            allowtransparency="true"
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/things/things_content/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            image_src
            link_to
            type
          }
        }
      }
    }
  }
`

export default Things
