import React, { useRef, useEffect } from "react"
import "./home.css"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import bg from "../images/home-bg.svg"
import { TweenMax } from "gsap"
import { Timeline } from "gsap/gsap-core"
import { Container, Row, Col } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import Button from "../components/layouts/Button"
import Img from "gatsby-image"

const Home = ({ data }) => {
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
      <section className="home">
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
                  <Button link={"/Projects"} width={"160px"}>
                    Mes projets
                  </Button>
                  <Button link={"/About"} width={"160px"}>
                    Voir mon profil
                  </Button>
                  <FontAwesomeIcon
                    className="home__down-icon"
                    icon={faChevronDown}
                    size="1x"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="home__services">
        <h3>
          Mes <span>services</span>
        </h3>
        <Container fluid={true}>
          <Row>
            <Col className="home__services__col" xs="12" xl="4">
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
                  Je suis intéressé par des missions frontend et/ou backend pour
                  vous apporter mes compétences.
                  <br />
                  <br />
                  Disponible sur <strong>Lyon</strong> ou{" "}
                  <strong>100% remote</strong>
                </p>
              </div>
            </Col>
            <Col className="home__services__col" xs="12" xl="4">
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
            <Col className="home__services__col" xs="12" xl="4">
              <div className="home__services__card">
                <h4>Sites web professionnels</h4>
                <p>
                  Vous avez besoin de visibilité sur internet et vous pensez à
                  un site web?
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
      </section>

      <section className="home__projects">
        <h4>
          Mes{" "}
          <span>
            <strong> projets</strong>
          </span>
        </h4>
        <Container fluid={true}>
          <Row>
            {data.allMarkdownRemark.edges.map(project => {
              return (
                <Col xs="12" xl="4" className="home__projects__col">
                  <div className="home__projects__card">
                    <Link to={`/project/${project.node.frontmatter.slug}`}>
                      <Img
                        style={{ maxHeight: "400px" }}
                        imgStyle={{ objectFit: "cover" }}
                        fluid={
                          project.node.frontmatter.featuredImage.childImageSharp
                            .fluid
                        }
                        alt={project.node.frontmatter.slug}
                      />
                    </Link>
                    <div className="home__projects__card__infos">
                      <h4>{project.node.frontmatter.title}</h4>
                    </div>
                  </div>
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

      <section className="home__blog">
        <h3>
          Derniers articles de mon <span>blog</span>
        </h3>

        <Container fluid={true}>
          <Row>
            <Col className="home__blog__col" xs="12" xl="6">
              <div className="home__blog__card">
                <Link
                  to={`/article/${data.allStrapiArticle.edges[0].node.slug}`}
                >
                  <Img
                    style={{ maxHeight: "300px" }}
                    imgStyle={{ objectFit: "cover" }}
                    fluid={
                      data.allStrapiArticle.edges[0].node.image.childImageSharp
                        .fluid
                    }
                    alt={data.allStrapiArticle.edges[0].node.slug}
                  />
                </Link>
                <div className="home__blog__card__infos">
                  <h4>{data.allStrapiArticle.edges[0].node.title}</h4>
                </div>
              </div>
            </Col>
            <Col className="home__blog__col" xs="12" xl="6">
              <div className="home__blog__card">
                <Link
                  to={`/article/${data.allStrapiArticle.edges[0].node.slug}`}
                >
                  <Img
                    style={{ maxHeight: "300px" }}
                    imgStyle={{ objectFit: "cover" }}
                    fluid={
                      data.allStrapiArticle.edges[1].node.image.childImageSharp
                        .fluid
                    }
                    alt={data.allStrapiArticle.edges[1].node.slug}
                  />
                </Link>

                <div className="home__blog__card__infos">
                  <h4>{data.allStrapiArticle.edges[1].node.title}</h4>
                </div>
              </div>
            </Col>
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
