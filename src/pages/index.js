import React from "react"
import "./home.css"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import bg from "../images/home-bg.svg"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <img
        src={bg}
        alt="développeur web react/javascript sur Lyon"
        className="home__image"
      ></img>
      <div className="home-content">
        <h3>
          Nicolas <span>MARET</span>
        </h3>
        <h1>
          {" "}
          Développeur Fullstack <br></br> React & NodeJS Freelance
        </h1>
        <p>
          Passionné par le web, je vous accompagne sur vos projets de
          développement d'applications
        </p>
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
          <Link to="/Projects" style={{ textDecoration: "none" }}>
            <div className="btn">Mes Projets</div>
          </Link>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <div className="btn">
              <span>Mon profil</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default Home
