/**
 * Blogroll component to display a series of blurbs
 * linking to blog posts.
 * 
 * Can be filtered by tag... eventually
 *
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import BlogrollEntry from "./blogroll-entry"

function Blogroll() {
  return (
    <StaticQuery
      query={blogrollQuery}
      render={data => {
        const posts = data.allMarkdownRemark.edges
        return (
          <div className='blogroll'>
            {posts.map(({ node }) => {
              return (
                <BlogrollEntry
                  title={node.frontmatter.title || node.fields.slug}
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  description={node.frontmatter.description}
                  excerpt={node.excerpt}
                  tags={node.frontmatter.tags}
                  key={node.fields.slug}
                />
              )
            })}
          </div>
        )
      }}
    />
  )
}

export default Blogroll

const blogrollQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            tags
          }
        }
      }
    }
  }
`