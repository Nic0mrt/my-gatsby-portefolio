import React from "react"
import { graphql } from "gatsby"
import "./article.css"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import Layout from "../components/Layout"

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
        <img
          className="article__image"
          src={article.image.publicURL}
          alt=""
        ></img>
        <h3>{article.title}</h3>
        <p className="article__date">
          publié le{" "}
          <Moment locale="fr" format="Do MMMM YYYY">
            {article.published_at}
          </Moment>
        </p>

        <div className="article__content">
          <ReactMarkdown source={article.content} />
        </div>
      </div>
    </Layout>
  )
}

export default Article
