/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

class BlogrollEntry extends React.Component {
  render () {
    var tags = this.props.tags.split(",").map(i => i.trim());
    if (tags.includes("hidden")) {
      return null;
    }
    else {
      return (
        <div key={this.props.slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: `none` }} to={this.props.slug}>
              {this.props.title}
            </Link>
          </h3>
          <small>{this.props.date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: this.props.description || this.props.excerpt,
            }}
          />
        </div>
      )
    }
  }
}

export default BlogrollEntry
