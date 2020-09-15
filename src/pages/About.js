import React, { useEffect, useRef } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "./about.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import {
  faMobileAlt,
  faDesktop,
  faServer,
  faCloud,
} from "@fortawesome/free-solid-svg-icons"
import cv from "../pdf/Nicolas-MARET-CV-2020.pdf"
import { TweenMax } from "gsap"
import { Timeline } from "gsap/gsap-core"
import { Link } from "gatsby"

const About = () => {
  const about = useRef(null)
  const infos = useRef(null)
  const frontend = useRef(null)
  const backend = useRef(null)
  const mobile = useRef(null)
  const deploy = useRef(null)
  const buttons = useRef(null)

  //rotation for preventing slow animations on firefox due to a bug

  useEffect(() => {
    TweenMax.fromTo(
      about.current,
      1,
      { scale: 0.5, rotation: 0.01 },
      { scale: 1, rotation: 0.01 }
    )
    TweenMax.fromTo(
      infos.current,
      1,
      { scale: 0.5, rotation: 0.01 },
      { scale: 1, rotation: 0.01 }
    )

    TweenMax.fromTo(
      buttons.current,
      1,
      { scale: 0.5, rotation: 0.01 },
      { scale: 1, rotation: 0.01 }
    )

    const timeline = new Timeline()
    timeline.fromTo(
      frontend.current,
      0.5,
      { opacity: 0, y: 200, rotation: 0.01 },
      { opacity: 1, y: 0, rotation: 0.01 }
    )
    timeline.fromTo(
      backend.current,
      0.5,
      { opacity: 0, y: 200, rotation: 0.01 },
      { opacity: 1, y: 0, rotation: 0.01 }
    )
    timeline.fromTo(
      mobile.current,
      0.5,
      { opacity: 0, y: 200, rotation: 0.01 },
      { opacity: 1, y: 0, rotation: 0.01 }
    )
    timeline.fromTo(
      deploy.current,
      0.5,
      { opacity: 0, y: 200, rotation: 0.01 },
      { opacity: 1, y: 0, rotation: 0.01 }
    )
  }, [])

  function calculateAge(birthdayString) {
    const birthday = new Date("12/22/1991")
    var ageDifMs = Date.now() - birthday.getTime()
    var ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  return (
    <Layout>
      <SEO title="A propos" />
      <div className="about-section">
        <h3>
          A propos de <span>moi</span>
        </h3>

        <div className="row">
          <div className="col-sm-12 col-md-6 about-me">
            <p className="about__paragraph" ref={about}>
              Diplômé d'un <span>DUT informatique</span> et d'un Master en
              management et après 6 ans dans le recrutement technique de profils
              cadres et cadres supérieurs dans l'industrie, j'ai décidé
              retourner à mes premiers amours et de reprendre une formation en
              développement Web. <br></br>
              <br></br>
              <span>Développeur Fullstack Javascript</span>. Je suis plus
              particulièrement spécialisé sur les frameworks <span>React</span>{" "}
              en frontend et <span>Express/NodeJS</span> en backend.<br></br>
              <br></br>
              Aujourd'hui ouvert aux opportunités sur <span>Lyon</span> et
              disponible pour vous accompagner dans vos développements de
              projets web.
            </p>
          </div>

          <div className="col-sm-12 col-md-6 infos" ref={infos}>
            <div>
              <span>Age </span>
              {calculateAge("22/12/1991")}
            </div>
            <div>
              <span>Langues </span>Francais, Anglais
            </div>

            <div>
              <span>Téléphone </span>+33 (0)7 71 67 04 64
            </div>
            <div className="about__social-bar">
              {" "}
              <Link
                to="https://github.com/Nic0mrt"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />{" "}
                <p>Visiter mon profil GitHub</p>
              </Link>
              <Link
                to="https://www.linkedin.com/in/nicolas-maret-linkedin"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />{" "}
                <p>Visiter mon profil Linkedin</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="btns-wrapper" ref={buttons}>
          <Link
            to={"/Contact"}
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="custom-btn"> Contactez moi</div>
          </Link>
          <a href={cv} target="_blank">
            <div className="custom-btn"> Télécharger mon CV</div>
          </a>
        </div>

        <h3>
          Mes <span>compétences</span>
        </h3>

        <div className="row">
          <div className="col-sm-12 col-md-6 skills-content" ref={frontend}>
            <h4>
              {" "}
              <i>
                <FontAwesomeIcon icon={faDesktop} size="1x" />{" "}
              </i>
              Frontend
            </h4>
            <p className="about__frontend__paragraph">
              Mon domaine de prédilection avec l'envie de m'améliorer jours
              après jours. J'aimerais participer au développement d'applications
              complexes. <br></br>
              <br></br>
              <ul>
                <li>React</li>
                <li>Gatsby</li>
                <li>Svelte</li>
                <li>Vanilla Javascript</li>
                <li>Wordpress</li>
              </ul>
            </p>
          </div>

          <div className="col-sm-12 col-md-6 skills-content" ref={backend}>
            <h4>
              {" "}
              <i>
                <FontAwesomeIcon icon={faServer} size="1x" />{" "}
              </i>{" "}
              Back-End
            </h4>
            <p className="about__backend__paragraph">
              Assez sensible au développement côté serveur, j'ai voulu être
              opérationnel côté backend afin de répondre précisément à mes
              besoins du côté front. Les technologies que j'ai utilisées sont :
              <br></br>
              <br></br>
              <ul>
                <li>CRUD sous Express (framework NodeJS)</li>
                <li>GraphQL avec Gatsby</li>
                <li>Strapi (Headless CMS)</li>
              </ul>
            </p>
          </div>

          <div className="col-sm-12 col-md-6 skills-content" ref={mobile}>
            <h4>
              {" "}
              <i>
                <FontAwesomeIcon icon={faMobileAlt} size="1x" />{" "}
              </i>{" "}
              Développement mobile
            </h4>
            <p className="about__mobile__paragraph">
              Ayant déjà eu une expérience significative en développement
              Android dans une autre vie, j'ai naturellement envie de retourner
              sur les environnements mobiles.<br></br>
              <br></br>
              <ul>
                <li>Swift/iOS (en cours de formation)</li>
              </ul>
            </p>
          </div>

          <div className="col-sm-12 col-md-6 skills-content" ref={deploy}>
            <h4>
              {" "}
              <i>
                <FontAwesomeIcon icon={faCloud} size="1x" />{" "}
              </i>
              Déploiement
            </h4>
            <p className="about__hosting__paragraph">
              Pour deployer mes applications, je me suis servi des plateformes
              suivantes :<br></br>
              <br></br>
              <ul>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>WebHooks via GitHub</li>
                <li>Cloudinary</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
