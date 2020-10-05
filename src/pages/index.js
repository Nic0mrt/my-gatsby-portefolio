import React, { useRef } from "react"
import "./home.css"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import bg from "../images/home-bg.svg"
import { Container, Row, Col } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import Button from "../components/layouts/Button"
import Img from "gatsby-image"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"

const Home = ({ data }) => {
  const image = useRef(null)

  const buttons = useRef(null)

  return (
    <Layout>
      <SEO title="Home" />

      <section className="home">
        <Container fluid={true}>
          <Row>
            <Col xs="12" lg="7" className="home__image__container">
              <Tween
                from={{ x: "-200px", opacity: 0, rotation: 0.01 }}
                to={{ x: "0", opacity: 1, rotation: 0.01 }}
                duration={1}
              >
                <img
                  ref={image}
                  src={bg}
                  alt="développeur web react/javascript sur Lyon"
                  style={{ width: "100%" }}
                ></img>
              </Tween>
            </Col>
            <Col xs="12" lg="5" className="home__content__container">
              <Timeline
                target={
                  <>
                    <div>
                      <h3>
                        Nicolas <span>MARET</span>
                      </h3>
                      <h1>
                        {" "}
                        Développeur Fullstack <br></br> React & NodeJS Freelance
                      </h1>
                      <p>
                        Passionné par le web, je vous accompagne sur vos projets
                        de développement d'applications
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
                      <Button link={"/Projects"} width={"160px"}>
                        Mes projets
                      </Button>
                      <Button link={"/About"} width={"160px"}>
                        Voir mon profil
                      </Button>
                    </div>
                  </>
                }
              >
                <Tween
                  from={{ y: "-200px", opacity: 0, rotation: 0.01 }}
                  to={{ y: "0", opacity: 1, rotation: 0.01 }}
                  duration={1}
                  target={0}
                ></Tween>
                <Tween
                  from={{ y: "200px", opacity: 0, rotation: 0.01 }}
                  to={{ y: "0", opacity: 1, rotation: 0.01 }}
                  duration={1}
                  target={1}
                ></Tween>
              </Timeline>
            </Col>
          </Row>
        </Container>
        <FontAwesomeIcon
          className="home__down-icon"
          icon={faChevronDown}
          size="1x"
        />
      </section>
      <section className="home__services" id="services">
        <Controller>
          <Scene
            duration={200}
            reverse={false}
            pin={false}
            triggerElement="#services"
            triggerHook="onEnter"
          >
            <Tween from={{ x: "-200px", opacity: 0 }} to={{ x: 0, opacity: 1 }}>
              <h3>
                Mes <span>services</span>
              </h3>
            </Tween>
          </Scene>
        </Controller>
        <Container fluid={true}>
          <Row>
            <Col className="home__services__col" xs="12" xl="4" id="regie">
              <Controller>
                <Scene
                  reverse={false}
                  duration={400}
                  pin={false}
                  triggerElement="#regie"
                  triggerHook="onEnter"
                >
                  <Tween
                    from={{ y: "200px", opacity: 0 }}
                    to={{ y: "0px", opacity: 1 }}
                  >
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
                        pour renforcer vos équipes sur un projet? <br />
                        <br />
                        Je suis intéressé par des missions frontend et/ou
                        backend pour vous apporter mes compétences.
                        <br />
                        <br />
                        Disponible sur <strong>Lyon</strong> ou{" "}
                        <strong>100% remote</strong>
                      </p>
                    </div>
                  </Tween>
                </Scene>
              </Controller>
            </Col>
            <Col className="home__services__col" xs="12" xl="4" id="forfait">
              <Controller>
                <Scene
                  reverse={false}
                  duration={400}
                  pin={false}
                  triggerElement="#forfait"
                  triggerHook="onEnter"
                >
                  <Tween
                    from={{ y: "200px", opacity: 0 }}
                    to={{ y: "0px", opacity: 1 }}
                  >
                    <div className="home__services__card">
                      <h4>Au forfait</h4>
                      <p>
                        Vous avez une idée et vous recherchez un développeur à
                        l'écoute de vos besoins?
                        <br />
                        Je peux vous développer votre application de A à Z et
                        répondre au mieux à votre cahier des charges.
                        <br />
                        <br />
                        N'hésitez pas à me contacter pour me faire part de votre
                        idée et je reviendrai vers vous avec une estimation.
                        Vous bénéficierez d'un accompagnement sur mesure.
                      </p>
                    </div>
                  </Tween>
                </Scene>
              </Controller>
            </Col>
            <Col className="home__services__col" xs="12" xl="4" id="wordpress">
              <Controller>
                <Scene
                  reverse={false}
                  duration={400}
                  pin={false}
                  triggerElement="#wordpress"
                  triggerHook="onEnter"
                >
                  <Tween
                    from={{ y: "200px", opacity: 0 }}
                    to={{ y: "0px", opacity: 1 }}
                  >
                    <div className="home__services__card">
                      <h4>Sites web professionnels</h4>
                      <p>
                        Vous avez besoin de visibilité sur internet et vous
                        pensez à un site web?
                        <br />
                        Nous définirons ensemble votre besoin du design au
                        référencement.
                        <br />
                        Je suis capable de vous proposer des solutions optimages
                        avec des outils comme{" "}
                        <span>
                          <strong>Gatsby ou Wordpress.</strong>
                        </span>
                      </p>
                    </div>
                  </Tween>
                </Scene>
              </Controller>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home__projects" id="projects">
        <Controller>
          <Scene
            reverse={false}
            duration={200}
            pin={false}
            triggerElement="#projects"
            triggerHook="onEnter"
          >
            <Tween from={{ x: "-200px", opacity: 0 }} to={{ x: 0, opacity: 1 }}>
              <h3>
                Mes{" "}
                <span>
                  <strong> projets</strong>
                </span>
              </h3>
            </Tween>
          </Scene>
        </Controller>

        <Container fluid={true}>
          <Row id="row">
            {data.allMarkdownRemark.edges.map((project, index) => {
              return (
                <Col
                  xs="12"
                  xl="4"
                  className="home__projects__col"
                  id={`project_${index}`}
                >
                  <Controller>
                    <Scene
                      duration={400}
                      reverse={false}
                      pin={false}
                      triggerElement={`#project_${index}`}
                      triggerHook="onEnter"
                    >
                      <Tween
                        from={{ y: "200px", opacity: 0 }}
                        to={{ y: "0", opacity: 1 }}
                      >
                        <div className="home__projects__card">
                          <Link
                            to={`/project/${project.node.frontmatter.slug}`}
                          >
                            <Img
                              style={{ maxHeight: "400px" }}
                              imgStyle={{ objectFit: "cover" }}
                              fluid={
                                project.node.frontmatter.featuredImage
                                  .childImageSharp.fluid
                              }
                              alt={project.node.frontmatter.slug}
                            />
                          </Link>
                          <div className="home__projects__card__infos">
                            <h4>{project.node.frontmatter.title}</h4>
                          </div>
                        </div>
                      </Tween>
                    </Scene>
                  </Controller>
                </Col>
              )
            })}
          </Row>
        </Container>
        <div className="home__projects__btn-wrapper">
          <Button link={"/Projects"} width={"200px"}>
            Voir tous mes projets
          </Button>
        </div>
      </section>

      <section className="home__blog" id="blog">
        <Controller>
          <Scene
            reverse={false}
            pin={false}
            duration={200}
            triggerElement="#blog"
            triggerHook="onEnter"
          >
            <Tween
              duration={1}
              from={{ x: "-200px", opacity: 0 }}
              to={{ x: "0px", opacity: 1 }}
            >
              <h3>
                Derniers articles de mon <span>blog</span>
              </h3>
            </Tween>
          </Scene>
        </Controller>

        <Container fluid={true}>
          <Row>
            {data.allStrapiArticle.edges.map((article, index) => {
              if (index < 2) {
                return (
                  <Col
                    className="home__blog__col"
                    xs="12"
                    xl="6"
                    id={`blog_${index}`}
                  >
                    <Controller>
                      <Scene
                        duration={400}
                        reverse={false}
                        pin={false}
                        triggerElement={`#blog_${index}`}
                        triggerHook="onEnter"
                      >
                        <Tween
                          from={{ y: "200px", opacity: 0 }}
                          to={{ y: "0", opacity: 1 }}
                        >
                          <div className="home__blog__card">
                            <Link to={`/article/${article.node.slug}`}>
                              <Img
                                style={{ maxHeight: "300px" }}
                                imgStyle={{ objectFit: "cover" }}
                                fluid={article.node.image.childImageSharp.fluid}
                                alt={article.node.slug}
                              />
                            </Link>
                            <div className="home__blog__card__infos">
                              <h4>{article.node.title}</h4>
                            </div>
                          </div>
                        </Tween>
                      </Scene>
                    </Controller>
                  </Col>
                )
              }
              return null
            })}
          </Row>
        </Container>
        <div className="home__blog__btn-wrapper">
          <Button link={"/Blog"} width={"200px"}>
            Voir tous mes articles
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export const homeQuery = graphql`
  query homeQuery {
    allStrapiArticle(sort: { fields: published_at, order: DESC }) {
      edges {
        node {
          title
          image {
            publicURL
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
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

export default Home
