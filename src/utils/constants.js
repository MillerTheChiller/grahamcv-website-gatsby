const amount_options = [
  { value: "one", label: "is one" },
  { value: "all", label: "are all" },
]

const type_options = [
  { value: "books", label: "books" },
  { value: "musicians", label: "musicians" },
  { value: "movies", label: "movies" },
  { value: "blogs", label: "blogs" },
  { value: "videos", label: "videos" },
  { value: "other", label: "essays" },
]

const graphQLQuery = `
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

export { amount_options, type_options, graphQLQuery }
