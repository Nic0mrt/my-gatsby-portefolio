import React from "react"
import "./home.css"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/Layout"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <h3>
        Nicolas <span>MARET</span>
      </h3>
      <h2> Développeur Web sur Lyon, spécialiste ReactJS</h2>
      <div className="logos">
        <i className="react">
          <FontAwesomeIcon icon={faReact} size="1x" />{" "}
        </i>
        <i className="js">
          <FontAwesomeIcon icon={faJs} size="1x" />{" "}
        </i>
        <i className="node-js">
          <FontAwesomeIcon icon={faNodeJs} size="1x" />{" "}
        </i>
      </div>
      <div className="go-to-btns-wrapper">
        <div className="btn">Voir mon portefolio</div>
        <div className="btn">Voir mon CV</div>
      </div>
    </div>
  </Layout>
)

export default Home
