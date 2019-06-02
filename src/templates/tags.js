import React from "react"
import BlogrollEntry from "../components/blogroll-entry"
import Layout from "../components/layout"

// Components
import { graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag }  = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <div>
        <h1>
          {tagHeader}
        </h1>
        <ul>
          {edges.map(({ node }) => {
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
        </ul>
      </div>
    </Layout>
  )
}

export default Tags

export const blogPostsByTagQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
