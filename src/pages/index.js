import React, { useRef, useEffect } from "react"
import "./home.css"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import bg from "../images/home-bg.svg"
import { TweenMax } from "gsap"
import { Timeline } from "gsap/gsap-core"
import { Container, Row, Col } from "reactstrap"

const Home = () => {
  const image = useRef(null)
  const content = useRef(null)
  const buttons = useRef(null)

  useEffect(() => {
    TweenMax.fromTo(
      image.current,
      1,
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0 }
    )

    const timeline = new Timeline()
    timeline.fromTo(
      content.current,
      1,
      {
        opacity: 0,
        y: 200,
        force3D: true,
        rotation: 0.01,
      },
      { opacity: 1, y: 0, force3D: true, rotation: 0.01 }
    )
    timeline.fromTo(
      buttons.current,
      0.5,
      { y: 100, opacity: 0, force3D: true, rotation: 0.01 },
      { y: 0, opacity: 1, force3D: true, rotation: 0.01 }
    )
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <div className="home">
        <Container fluid={true}>
          <Row>
            <Col xs="12" lg="6" className="home__image__container">
              <img
                ref={image}
                src={bg}
                alt="développeur web react/javascript sur Lyon"
                style={{ width: "100%" }}
              ></img>
            </Col>
            <Col xs="12" lg="6" className="home__content__container">
              <div ref={content}>
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
                <div className="go-to-btns-wrapper" ref={buttons}>
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
            </Col>
          </Row>
        </Container>
      </div>
      <div className="home__services">
        <h3>
          Mes <span>services</span>
        </h3>
        <Container fluid={true}>
          <Row>
            <Col style={{ padding: "30px" }} xs="12" xl="4">
              <div className="home__services__card">
                <h4>En régie</h4>
                <p>
                  Vous avez besoin d'un développeur{" "}
                  <span>
                    <strong>React.JS</strong>
                  </span>{" "}
                  ou{" "}
                  <span>
                    <strong>Node.JS</strong>
                  </span>{" "}
                  pour renforcer vos équipes sur un projet ? <br />
                  <br />
                  Je suis intéressé par des missions frontend et/ou backend pour
                  vous apporter mes compétences.
                  <br />
                  <br />
                  Disponible sur <strong>Lyon</strong> ou{" "}
                  <strong>100% remote</strong>
                </p>
              </div>
            </Col>
            <Col style={{ padding: "30px" }} xs="12" xl="4">
              <div className="home__services__card">
                <h4>Au forfait</h4>
                <p>
                  Vous avez une idée et vous recherchez un développeur à
                  l'écoute de vos besoins?
                  <br />
                  Je peux vous développer votre application de A à Z et répondre
                  au mieux à votre cahier des charges.
                  <br />
                  <br />
                  N'hésitez pas à me contacter pour me faire part de votre idée
                  et je reviendrai vers vous avec une estimation. Vous
                  bénéficierez d'un accompagnement sur mesure.
                </p>
              </div>
            </Col>
            <Col style={{ padding: "30px" }} xs="12" xl="4">
              <div className="home__services__card">
                <h4>Sites web professionnels</h4>
                <p>
                  Vous avez besoin de visibilité sur internet et vous pensez à
                  un site web ?
                  <br />
                  Nous définirons ensemble votre besoin du design au
                  référencement.
                  <br />
                  Je suis capable de vous proposer des solutions optimages avec
                  des outils comme{" "}
                  <span>
                    <strong>Gatsby ou Wordpress.</strong>
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Home
