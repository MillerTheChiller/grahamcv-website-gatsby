import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className="navbar header">
      <div className="name">
        <Link to="/">Graham Miller</Link>
      </div>
      <div className="navlinks">
        <div>
          <Link to="/things/"> Things I like </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
