import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className="navbar header">
      <div className="name">
        <Link to="/">Graham</Link>
      </div>
      <div className="navlinks">
        <div>
          <Link to="/things/"> Things </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
