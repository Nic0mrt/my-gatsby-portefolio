import React from "react"
import { graphql } from "gatsby"
import "./article.css"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query ArticleQuery($id: String) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
        publicURL
      }
    }
  }
`

const Article = ({ data }) => {
  const article = data.strapiArticle
  return (
    <Layout>
      <div className="article-section">
        <h3>{article.title}</h3>
        <div className="article">
          <p className="article__date">
            publié le{" "}
            <Moment format="MMMM Do YYYY">{article.published_at}</Moment>
          </p>

          <img className="article__image" src={article.image.publicURL}></img>
          <ReactMarkdown source={article.content} />
        </div>
      </div>
    </Layout>
  )
}

export default Article
