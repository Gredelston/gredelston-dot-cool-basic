/**
 * Sidebar component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Sidebar() {
  return (
    <StaticQuery
      query={sidebarQuery}
      render={data => {
        const { title, author, social } = data.site.siteMetadata
        return (
          <div id="sidebar">
            <h1 id="sidebar-title">{title}</h1>
            I am a sidebar
          </div>
        )
      }}
    />
  )
}

const sidebarQuery = graphql`
  query sidebarQuery {
    avatar: file(absolutePath: { regex: "/headshot.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        social {
          twitter,
          github,
          linkedin,
          email
        }
      }
    }
  }
`

export default Sidebar
