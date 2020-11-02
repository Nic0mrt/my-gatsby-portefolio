import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "./projects.css"
import { Container, Row } from "reactstrap"
import ProjectCard from "../components/ProjectCard"
import { Controller, Scene } from "react-scrollmagic"

const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="Mes Projets" />
      <div className="projects-section">
        <h3 className="projects-title">
          Mes <span> projets</span>
        </h3>
        <div className="projects-list">
          <Container>
            <Row>
              {data.allMarkdownRemark.edges.map((project, index) => {
                return <ProjectCard project={project.node} index={`${index}`} />
              })}
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  )
}

export const projectsQuery = graphql`
  query MyProjects {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            date
            skills
            presentation
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
    }
  }
`

export default Projects
