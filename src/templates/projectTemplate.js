import React from "react"
import { graphql } from "gatsby"
import Moment from "react-moment"
import Layout from "../components/Layout"
import "./projectTemplate.css"
import Img from "gatsby-image"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const featuredImage = frontmatter.featuredImage.childImageSharp.fluid
  const alt = frontmatter.alt

  return (
    <Layout>
      <div className="project-section">
        <h3>{frontmatter.title} </h3>
        <div>
          <Moment locale="fr" format="Do MMMM YYYY">
            {frontmatter.date}
          </Moment>
        </div>
        <Img fluid={featuredImage} alt={alt}></Img>
        <a href={frontmatter.github} alt="lien vers mon code github">
          {frontmatter.github}
        </a>
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
