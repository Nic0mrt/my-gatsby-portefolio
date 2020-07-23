import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard"
import { graphql } from "gatsby"
import "./blog.css"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog-section">
        <h3 className="blog-title">
          Venez découvrir mon <span>blog</span>
        </h3>

        <div className="blog-feed">
          {data.allStrapiArticle.edges.map(article => {
            return <PostCard article={article.node} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
  query blogQuery {
    allStrapiArticle {
      edges {
        node {
          strapiId
          title
          image {
            publicURL
            childImageSharp {
              fixed(width: 600, height: 300) {
                base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
              }
              fluid(maxWidth: 400) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
          slug
          published_at
        }
      }
    }
  }
`

export default Blog
