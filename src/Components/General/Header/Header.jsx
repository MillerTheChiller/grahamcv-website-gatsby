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
          <a
            className="headerLlnk"
            href="https://www.linkedin.com/in/graham-miller-68375b113/"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a className="headerlink" href="https://github.com/millerthechiller">
            GitHub
          </a>
        </div>
        <div>
          <a className="headerlink" href="mailto: grahamiller96@gmail.com">
            Email
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
