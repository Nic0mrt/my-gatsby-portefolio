import React, { useState, useRef, useEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { TweenMax } from "gsap"

const Contact = () => {
  const form = useRef(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [societe, setSociete] = useState("")
  const [message, setMessage] = useState("")

  const [sendStatus, setSendStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    TweenMax.fromTo(
      form.current,
      1,
      { opacity: 0, y: 200, rotation: 0.1, force3D: true },
      { opacity: 1, y: 0, rotation: 0.1, force3D: true }
    )
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    const form = e.target
    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("phoneNumber", phoneNumber)
    formData.append("societe", societe)
    formData.append("message", message)
    try {
      const res = await fetch("https://formspree.io/xqkywelk", {
        headers: {
          Accept: "application/json",
        },
        method: "POST",
        body: formData,
      })

      if (res.status === 200) {
        form.reset()
        showStatus()
      } else {
        showStatus(false)
      }
      setIsLoading(false)
    } catch (error) {
      showStatus(false)
      setIsLoading(false)
    }
  }

  const handleInputChange = e => {
    const input = e.target.name
    switch (input) {
      case "name":
        setName(e.target.value)
        break
      case "email":
        setEmail(e.target.value)
        break
      case "phoneNumber":
        setPhoneNumber(e.target.value)
        break
      case "societe":
        setSociete(e.target.value)
        break
      default:
        setMessage(e.target.value)
        break
    }
  }

  const showStatus = (success = true) => {
    if (success) {
      setSendStatus("Message envoyé")
    } else {
      setSendStatus("Impossible d'envoyer le message")
    }
    setTimeout(() => {
      setSendStatus("")
    }, 5000)
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contact-section">
        <h3 className="contact-title">
          Contactez <span>moi</span> !
        </h3>
        <p className="contact-paragraph">
          {" "}
          Un projet front end en <span>React</span> à me confier ou en back end{" "}
          <span>Express</span> ? Besoin d'un développeur <span>Javascript</span>{" "}
          fullstack? N'hésitez pas à me joindre en me laissant vos coordonnées,
          je vous recontacterai au plus vite !{" "}
        </p>

        <form
          className="contact-form"
          method="POST"
          onSubmit={handleSubmit}
          ref={form}
        >
          <div className="form-group">
            <label htmlFor="name">
              Votre nom :
              <input
                required
                name="name"
                type="text"
                className="form-control"
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Adresse Email :
              <input
                required
                name="email"
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">
              Numéro de téléphone :
              <input
                required
                name="phoneNumber"
                type="tel"
                className="form-control"
                aria-describedby="Téléphone"
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="societe">
              Société (facultatif):
              <input
                name="societe"
                type="text"
                className="form-control"
                aria-describedby="Société"
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Message
              <textarea
                required
                name="message"
                className="form-control"
                rows="5"
                onChange={handleInputChange}
              ></textarea>
            </label>
          </div>
          <div className="btn-status">
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? (
                <div
                  className="spinner-border spinner-border-sm text-light"
                  role="status"
                ></div>
              ) : (
                "Envoyer"
              )}
            </button>
            <span>{sendStatus ? sendStatus : null}</span>
          </div>
          <p className="phone-contact">
            Par téléphone : <FontAwesomeIcon icon={faPhoneAlt} size="1x" /> 07
            71 67 04 64
          </p>
        </form>
        <p className="contact-paragraph">
          {" "}
          Dispobile sur <span>Lyon</span> ou en <span> remote</span>
        </p>
      </div>
    </Layout>
  )
}

export default Contact
