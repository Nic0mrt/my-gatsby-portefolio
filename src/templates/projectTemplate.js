import React from "react"
import { graphql, Link } from "gatsby"
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
  const githubLink = frontmatter.github

  return (
    <Layout>
      <div className="project-section">
        <h3>{frontmatter.title} </h3>
        <Img
          style={{
            boxShadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.22)",
            marginBottom: "30px",
          }}
          fluid={featuredImage}
          alt={alt}
        ></Img>
        <Link to={githubLink} alt={alt} target="_blank" rel="noreferrer">
          Voir le code source sur Github
        </Link>
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
        github
        alt
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
