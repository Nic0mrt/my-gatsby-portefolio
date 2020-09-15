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
        <img
          ref={image}
          src={bg}
          alt="développeur web react/javascript sur Lyon"
          className="home__image"
        ></img>
        <div className="home-content">
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
      </div>
    </Layout>
  )
}

export default Home
