import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About Me" />
        <h1>Greg Edelston, Whose Website You&rsquo;re Viewing</h1>
        <p>The rumors are true. I&rsquo;m Greg, and this is my website.</p>
        <p>Professionally, I write software at Google in Boulder, Colorado. I use GTD to keep my life organized.</p>
        <p>Hobbially, my more invested hobbies include improv comedy and studying Zen Buddhism.</p>
        <p>Other hobbies include making music, writing puzzles, playing board games, and trying to stay moderately fit.</p>
        <p>Someday I&rsquo;ll put my resume here.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
