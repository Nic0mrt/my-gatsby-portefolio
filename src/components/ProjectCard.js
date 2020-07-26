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
        to={`project/${project.frontmatter.slug}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="project-card">
          <Img
            fluid={project.frontmatter.featuredImage.childImageSharp.fluid}
          ></Img>

          <div className="project-card__description">
            <h4>{project.title}</h4>
            <p>{project.frontmatter.presentation}</p>

            <ul className="project-card__skills-list">
              {" "}
              {project.frontmatter.skills.map(skill => {
                return <li>{skill}</li>
              })}
            </ul>
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
