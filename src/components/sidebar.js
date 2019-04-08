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

            <h3>Pages</h3>
            <ul id="sidebar-nav">
              {
                topNav.map(navLink =>
                  <li class="sidebar-nav-link-container">
                    <Link key={navLink.path} className="sidebar-nav-link" to={navLink.path}>
                      {navLink.label}
                    </Link>
                  </li>
                )
              }
            </ul>

            <h3>Social Links</h3>
            <ul id="social-links">
              {
                social.map(socialSite =>
                  <li class="sidebar-social-link-container">
                    <Link key={socialSite.label} className="sidebar-social-link" to={socialSite.path}>
                      {socialSite.label}
                    </Link>
                  </li>
                )
              }
            </ul>
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
          label,
          path
        }
        topNav {
          label
          path
        }
      }
    }
  }
`

export default Sidebar
