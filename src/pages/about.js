import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from "../../static/resume.pdf"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About Me" />
        <h1>About Me</h1>
        <p>I&rsquo;m Greg Edelston. Hence the portmanteau. This is my blog.</p>
        <p>Writing software is fun for me. It's collaborative puzzle-solving with the power to address real problems&mdash;what&rsquo;s not to like? These days I work at Google on the <a href="https://chromium.googlesource.com/chromiumos/platform/tast/">integration testing framework for ChromeOS</a>.</p>
        <p>Other activities I enjoy include improv comedy, Zen Buddhism, making music, solving puzzles, and trying to stay reasonably fit.</p>
        <p>I live in Boulder, CO, but a sizeable chunk of my heart remains in New England.</p>
        <p>Check out my (slightly outdated) <a href={resume}>resume</a>.</p>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
