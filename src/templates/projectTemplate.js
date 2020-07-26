import React from "react"
import { graphql } from "gatsby"
import Moment from "react-moment"
import Layout from "../components/Layout"
import "./projectTemplate.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="project-section">
        <h3>{frontmatter.title}</h3>

        <div>
          <Moment locale="fr" format="Do MMMM YYYY">
            {frontmatter.date}
          </Moment>
        </div>

        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        slug
        title
      }
    }
  }
`
