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
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginBottom: 0,
                marginLeft: `auto`,
                marginRight: `auto`,
                minWidth: 50,
                borderRadius: `100%`,
                display: `block`
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <div id="sidebar-bio" align="center">
              My name is <br />
              <strong id="sidebar-bio-name">{author}</strong><br />
              and this is my blog.
            </div>
            <div id="sidebar-nav">
              <a href="/about">About</a>
            </div>
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
        fixed(width: 128, height: 128) {
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
