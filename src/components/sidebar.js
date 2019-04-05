/**
 * Sidebar component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Sidebar() {
  return (
    <StaticQuery
      query={sidebarQuery}
      render={data => {
        const { title, author, social, topNav } = data.site.siteMetadata
        console.log(topNav)
        return (
          <div id="sidebar">
            <Link to="/">
              <h1 id="sidebar-title">{title}</h1>
            </Link>
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
              {
                topNav.map(navLink =>
                  <Link key={navLink.path} className="sidebar-nav-link" to={navLink.path}>
                    {navLink.title}
                  </Link>
                )
              }
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
        topNav {
          title
          path
        }
      }
    }
  }
`

export default Sidebar
