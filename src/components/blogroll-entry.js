/**
 * Blogroll entry component that lists a single post.
 *
 */

import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

class BlogrollEntry extends React.Component {
  render () {
    var tags = this.props.tags;
    const tags_separator = <span
      style={{
        marginLeft: '10px',
        marginRight: '10px'
      }}
    >&#9679;</span>
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
            <span className="blogroll-entry-tag-container">
              {tags_separator}
              {
                tags.map(tag => {
                  return (
                    <Link to={`/tags/`.concat(tag)} className="blogroll-entry-tag-link">
                      <b key={tag}>
                        {tag}
                      </b>
                    </Link>
                  )
                }).reduce((prev, curr) => [prev, ",    ", curr])
              }
            </span>
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
