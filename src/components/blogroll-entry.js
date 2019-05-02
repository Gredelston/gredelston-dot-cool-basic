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
          <p className="blogroll-entry-details">
            <span>{this.props.date}</span>
            <span className="tags_separator">
              &nbsp;&nbsp;&nbsp;&nbsp;&#9679;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            {tags.map(({ tag }) => {
              return (
                <b>{tag}</b>
              )
            })}
            <span>{tags.join(", ")}</span>
          </p>
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
