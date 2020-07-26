import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "./projects.css"
import territoires from "../images/territoires-presentation.png"
import portfolio from "../images/portfolio-presentation.png"
import { Container, Row, Col } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

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
              <Link
                to="/project/gestion-des-terrritoires-svelte-mapbox"
                style={{ textDecoration: "none", color: "black" }}
              >
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
                  <div className="project-card__hover-about">
                    <FontAwesomeIcon
                      icon={faSearch}
                      size="2x"
                    ></FontAwesomeIcon>
                    <p style={{ fontWeight: "bold" }}>En savoir plus</p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col sm="12" lg="6">
              {" "}
              <Link
                to="/project/mon-portefolio-en-gatsby-et-react"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="project-card">
                  <img src={portfolio} alt=""></img>
                  <div className="project-card__description">
                    <h4>Nicolasmaret.fr</h4>
                    <p>
                      Site portfolio entièrement responsive avec un générateur
                      de sites statiques
                    </p>
                    <ul className="project-card__skills-list">
                      {" "}
                      <li>Javascript</li>
                      <li>React</li>
                      <li>Gatsby</li>
                      <li>Strapi</li>
                      <li>Boostrap</li>
                    </ul>
                    <div className="project-card__hover-about">
                      <FontAwesomeIcon
                        icon={faSearch}
                        size="2x"
                      ></FontAwesomeIcon>
                      <p>En savoir plus</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Projects
