import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "./projects.css"
import territoires from "../images/territoires-presentation.png"
import portfolio from "../images/portfolio-presentation.png"
import { Container, Row, Col } from "reactstrap"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Mes Projets" />
      <div className="projects-section">
        <h3>
          Mes <span> projets</span>
        </h3>

        <Container>
          <Row>
            <Col sm="12" lg="6">
              {" "}
              <div className="project-card">
                <img src={territoires} alt=""></img>
                <div className="project-card__description">
                  <h4>Gestion de territoires</h4>
                  <p>
                    Application de gestion d'attribution de territoires
                    géographiques pour une association
                  </p>

                  <ul className="project-card__skills-list">
                    {" "}
                    <li>Javascript</li>
                    <li>Svelte</li>
                    <li>Mapbox</li>
                    <li>Express</li>
                    <li>Boostrap</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col sm="12" lg="6">
              {" "}
              <div className="project-card">
                <img src={portfolio} alt=""></img>
                <div className="project-card__description">
                  <h4>Nicolasmaret.fr</h4>
                  <p>
                    Site portfolio entièrement responsive avec un générateur de
                    sites statiques
                  </p>
                  <ul className="project-card__skills-list">
                    {" "}
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Gatsby</li>
                    <li>Strapi</li>
                    <li>Boostrap</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Projects
