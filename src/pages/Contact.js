import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { Toast, ToastBody, ToastHeader } from "reactstrap"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [toastStatus, setToastStatus] = useState("")
  const [toastMessage, setToastMessage] = useState("")
  const [toastIsOpen, setToastIsOpen] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    const form = e.target
    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("message", message)

    const res = await fetch("https://formspree.io/xqkywelk", {
      headers: {
        Accept: "application/json",
      },
      method: "POST",
      body: formData,
    })

    if (res.status === 200) {
      form.reset()
      showToast()
    } else {
      showToast(false)
    }
    setIsLoading(false)
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
      default:
        setMessage(e.target.value)
        break
    }
  }

  const showToast = (success = true) => {
    setToastIsOpen(true)
    if (success) {
      setToastStatus("Message envoyé avec succès")
      setToastMessage("Je vous réponds au plus vite")
    } else {
      setToastStatus("Erreur")
      setToastMessage("Impossible d'envoyer le message")
    }
    setTimeout(() => {
      setToastIsOpen(false)
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
          <span>Express</span> ? Un recrutement d'un développeur{" "}
          <span>Javascript</span> ? N'hésitez pas à me joindre en me laissant
          vos coordonnées, je vous recontacterai au plus vite !{" "}
        </p>

        <form className="contact-form" method="POST" onSubmit={handleSubmit}>
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
          <p className="phone-contact">
            Par téléphone : <FontAwesomeIcon icon={faPhoneAlt} size="1x" /> 07
            71 67 04 64
          </p>
        </form>
      </div>

      <div
        className="p-3 my-2 rounded bg-docs-transparent-grid"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          right: "0",
          bottom: "0",
        }}
      >
        <Toast isOpen={toastIsOpen}>
          <ToastHeader>{toastStatus}</ToastHeader>
          <ToastBody>{toastMessage}</ToastBody>
        </Toast>
      </div>
    </Layout>
  )
}

export default Contact
