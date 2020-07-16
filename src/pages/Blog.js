import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard"
import { StaticQuery, graphql } from "gatsby"
import "./blog.css"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog-section">
        <ul className="blog-feed">
          {data.allStrapiArticle.edges.map(article => {
            return (
              <li key={article.node.strapiId}>
                <PostCard article={article.node} />
              </li>
            )
          })}
        </ul>
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
          }
          slug
        }
      }
    }
  }
`

export default Blog
