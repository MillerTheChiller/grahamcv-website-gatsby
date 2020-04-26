import React from "react"
import PropTypes from "prop-types"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <div style={{ margin: "3rem auto", maxWidth: 750, padding: "0 1rem" }}>
      <Header />
      <p> The Child component goes inbetween! </p>
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {}

export default Layout
