import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./ThingsWrapper.module.css"
import ButtonTab from "../ButtonTab/ButtonTab"
import FavouriteBooks from "../FavouriteBooks/FavouriteBooks"

const ThingsWrapper = () => {
  const [tabToDisplay, setTabToDisplay] = useState("Books")
  return (
    <div className={styles.thingsWrapper}>
      <h1> Some of my favourite things </h1>
      <div className={styles.thingsControlGroup}>
        <div className={styles.thingsNavigation}>
          <ButtonTab
            onClick={() => setTabToDisplay("books")}
            buttonContent="Books"
          />
          <ButtonTab
            onClick={() => setTabToDisplay("videos")}
            buttonContent="Videos"
          />
          <ButtonTab
            onClick={() => setTabToDisplay("albums")}
            buttonContent="Albums"
          />
          <ButtonTab
            onClick={() => setTabToDisplay("Articles")}
            buttonContent="Articles & Essays"
          />
          <ButtonTab
            onClick={() => setTabToDisplay("Everything Else")}
            buttonContent="Everything Else"
          />
        </div>
        <div className={styles.thingsDisplay}>
          <FavouriteBooks />
        </div>
      </div>
    </div>
  )
}

// export const query = graphql`
//   {
//     books: allMarkdownRemark(
//       filter: {
//         fileAbsolutePath: { regex: "/content/things/things_content/books/" }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             image_src {
//               childImageSharp {
//                 fluid(maxWidth: 800) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             link_to
//             type
//           }
//         }
//       }
//     }
//     blogs: allMarkdownRemark(
//       filter: {
//         fileAbsolutePath: { regex: "/content/things/things_content/blogs/" }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             subtitle
//             link_to
//             type
//           }
//         }
//       }
//     }
//     games: allMarkdownRemark(
//       filter: {
//         fileAbsolutePath: { regex: "/content/things/things_content/games/" }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             image_src {
//               childImageSharp {
//                 fluid(maxWidth: 800) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             link_to
//             type
//           }
//         }
//       }
//     }
//     movies: allMarkdownRemark(
//       filter: {
//         fileAbsolutePath: { regex: "/content/things/things_content/movies/" }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             image_src {
//               childImageSharp {
//                 fluid(maxWidth: 800) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             link_to
//             type
//           }
//         }
//       }
//     }
//     podcasts: allMarkdownRemark(
//       filter: {
//         fileAbsolutePath: { regex: "/content/things/things_content/podcasts/" }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             image_src {
//               childImageSharp {
//                 fluid(maxWidth: 800) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             link_to
//             type
//           }
//         }
//       }
//     }
//     albums: allMarkdownRemark(
//       filter: {
//         fileAbsolutePath: { regex: "/content/things/things_content/music/" }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             image_src {
//               childImageSharp {
//                 fluid(maxWidth: 800) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             link_to
//             type
//           }
//         }
//       }
//     }
//     videos: allMarkdownRemark(
//       filter: {
//         fileAbsolutePath: { regex: "/content/things/things_content/youtube/" }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             link_to
//             type
//           }
//         }
//       }
//     }
//     other: allMarkdownRemark(
//       filter: {
//         fileAbsolutePath: { regex: "/content/things/things_content/other/" }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             subtitle
//             link_to
//             type
//           }
//         }
//       }
//     }
//   }
// `

export default ThingsWrapper
