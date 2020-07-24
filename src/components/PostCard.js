import React from "react"
import { Link } from "gatsby"
import "./postcard.css"
import Img from "gatsby-image"
import Moment from "react-moment"

const PostCard = ({ article }) => {
  const title = article.title ? article.title : "titre non chargé"

  return (
    <div className="postcard">
      <div className="postcard__image">
        <Link to={`/article/${article.slug}`}>
          <Img fluid={article.image.childImageSharp.fixed} alt={article.slug} />
        </Link>
      </div>
      <div className="postcard__content">
        <Link
          to={`/article/${article.slug}`}
          style={{ textDecoration: "none" }}
        >
          <h4 className="postcard__content__title">{title}</h4>
        </Link>
        <p className="postcard__content__pusblished-at">
          publié le{" "}
          <Moment locale="fr" format="Do MMMM YYYY">
            {article.published_at}
          </Moment>
        </p>
      </div>
    </div>
  )
}

export default PostCard
