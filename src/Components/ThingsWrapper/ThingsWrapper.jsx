import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const ThingsWrapper = () => {
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
              type
            }
          }
        }
      }
    }
  `)
  console.log("Data", data)
  console.log(data)
  return (
    <div>
      <h3> Hello </h3>
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
