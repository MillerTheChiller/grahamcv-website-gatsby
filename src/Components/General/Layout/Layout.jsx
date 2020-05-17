import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Metadata from "../../Metadata/Metadata"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Metadata />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
