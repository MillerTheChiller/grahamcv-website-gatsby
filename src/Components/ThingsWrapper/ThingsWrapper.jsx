import React, { useState } from "react"
import styles from "./ThingsWrapper.module.css"
import ButtonTab from "../ButtonTab/ButtonTab"
import FavouriteBooks from "../FavouriteBooks/FavouriteBooks"

const ThingsWrapper = () => {
  const [tabToDisplay, setTabToDisplay] = useState(<FavouriteBooks />)
  const [currentTab, setCurrentTab] = useState("Books")

  return (
    <div className={styles.thingsWrapper}>
      <h1> Some of my favourite things </h1>
      <div className={styles.thingsControlGroup}>
        <div className={styles.thingsNavigation}>
          <ButtonTab
            onClick={() => {
              setTabToDisplay(<FavouriteBooks />)
              setCurrentTab("Books")
            }}
            buttonContent="Books"
            tabActive={currentTab === "Books"}
          />
          <ButtonTab
            onClick={() => {
              setTabToDisplay("Videos")
              setCurrentTab("Videos")
            }}
            buttonContent="Videos"
            tabActive={currentTab === "Videos"}
          />
          <ButtonTab
            onClick={() => {
              setTabToDisplay("Albums")
              setCurrentTab("Albums")
            }}
            buttonContent="Albums"
            tabActive={currentTab === "Albums"}
          />
          <ButtonTab
            onClick={() => {
              setTabToDisplay("Articles")
              setCurrentTab("Articles & Essays")
            }}
            buttonContent="Articles & Essays"
            tabActive={currentTab === "Articles & Essays"}
          />
          <ButtonTab
            onClick={() => {
              setCurrentTab("Everything Else")
              setTabToDisplay("Everything Else")
            }}
            buttonContent="Everything Else"
            tabActive={currentTab === "Everything Else"}
          />
        </div>
        <div className={styles.thingsDisplay}>{tabToDisplay}</div>
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
