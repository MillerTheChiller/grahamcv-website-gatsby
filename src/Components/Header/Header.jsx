import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className="navbar header">
      <div className="name">
        <a className="navbar-name" href="./">
          Graham Miller
        </a>
      </div>
      <div className="navlinks">
        <div>
          <a className="headerLink" href="./things/things.html">
            <Link to="/things/"> Things I like </Link>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
