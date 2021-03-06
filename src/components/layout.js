import React from "react"

import Sidebar from "./sidebar"
import { rhythm } from "../utils/typography"

import "../../static/global-css.css"
import "../../static/colors.css"

class Layout extends React.Component {
  render() {
    const { children } = this.props

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
