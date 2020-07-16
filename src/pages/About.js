import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "./about.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMobileAlt,
  faDesktop,
  faServer,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons"

const About = () => {
  return (
    <Layout>
      <SEO title="A propos" />
      <div className="about-section">
        <h3>
          A propos de <span>moi</span>
        </h3>

        <div className="row">
          <div className="col-sm-12 col-md-6 about-me">
            <p>
              Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
              elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
              justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae
              hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
              condimentum dictum et vel massa. Ut in imperdiet dolor, vel
              consectetur dui.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 infos">
            <div>
              <span>Age </span>28
            </div>
            <div>
              <span>Langues </span>Francais, Anglais
            </div>
            <div>
              <span>Email </span>
              <a href="mailto:maret.nicolas@gmail.com">
                maret.nicolas@gmail.com
              </a>
            </div>
            <div>
              <span>Téléphone </span>+33 (0)7 71 67 04 64
            </div>
          </div>
        </div>

        <h3>
          Mes <span>compétences</span>
        </h3>

        <div className="row">
          <div className="col-sm-12 col-md-6 skills-content">
            <h4>
              {" "}
              <i>
                <FontAwesomeIcon icon={faDesktop} size="1x" />{" "}
              </i>
              Développement Web
            </h4>
            <p>
              Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
              elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
              justo, faucibus ut mi in
            </p>
          </div>

          <div className="col-sm-12 col-md-6 skills-content">
            <h4>
              {" "}
              <i>
                <FontAwesomeIcon icon={faMobileAlt} size="1x" />{" "}
              </i>{" "}
              Développement mobile
            </h4>
            <p>
              Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
              elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
              justo, faucibus ut mi in
            </p>
          </div>

          <div className="col-sm-12 col-md-6 skills-content">
            <h4>
              {" "}
              <i>
                <FontAwesomeIcon icon={faShoppingCart} size="1x" />{" "}
              </i>
              E-Commerce
            </h4>
            <p>
              Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
              elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
              justo, faucibus ut mi in
            </p>
          </div>

          <div className="col-sm-12 col-md-6 skills-content">
            <h4>
              {" "}
              <i>
                <FontAwesomeIcon icon={faServer} size="1x" />{" "}
              </i>{" "}
              Back-End
            </h4>
            <p>
              Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
              elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
              justo, faucibus ut mi in
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
