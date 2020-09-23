import React from "react"
import { Link } from "gatsby"
import "./projectCard.css"
import Img from "gatsby-image"
import { Col } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const ProjectCard = ({ project }) => {
  return (
    <Col sm="12" lg="6">
      {" "}
      <Link
        to={`/project/${project.frontmatter.slug}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="project-card">
          <div className="project-card__image">
            <Img
              fluid={project.frontmatter.featuredImage.childImageSharp.fluid}
            ></Img>
          </div>

          <div className="project-card__description">
            <h4>{project.frontmatter.title}</h4>
            <p>{project.frontmatter.presentation}</p>
          </div>
          <div className="project-card__hover-about">
            <FontAwesomeIcon icon={faSearch} size="2x"></FontAwesomeIcon>
            <p style={{ fontWeight: "bold" }}>En savoir plus</p>
          </div>
        </div>
      </Link>
    </Col>
  )
}

export default ProjectCard
