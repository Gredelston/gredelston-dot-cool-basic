import React from "react"
import { Link } from "gatsby"

import Sidebar from "./sidebar"
import { rhythm, scale } from "../utils/typography"

import "../../static/global-css.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div id='layout'>
        <Sidebar />
        <div id='main-content'>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
