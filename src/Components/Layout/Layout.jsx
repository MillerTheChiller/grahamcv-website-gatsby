import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, Link, graphql } from "gatsby"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="layout">
      <Header />
      <h1> {data.site.siteMetadata.title} </h1>
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {}

export default Layout
