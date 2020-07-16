import React from "react"
import { Link } from "gatsby"
import "./postcard.css"
import Moment from "react-moment"

const PostCard = ({ article }) => {
  const title = article.title ? article.title : "titre non chargé"
  const imageURL = article.image.publicURL
    ? article.image.publicURL
    : "https://picsum.photos/300/200"

  return (
    <div className="postcard">
      <Link to={`/article/${article.slug}`}>
        <div className="postcard__image">
          <img src={imageURL} alt={article.slug} />
        </div>
      </Link>

      <div className="postcard__content">
        <Link
          to={`/article/${article.slug}`}
          style={{ textDecoration: "none" }}
        >
          <h4 className="postcard__content__title">{title}</h4>
        </Link>
        <p className="postcard__content__pusblished-at">
          publié le{" "}
          <Moment format="MMMM Do YYYY">{article.published_at}</Moment>
        </p>
      </div>
    </div>
  )
}

export default PostCard
