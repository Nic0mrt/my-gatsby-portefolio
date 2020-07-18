import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("message", message)

    const res = await fetch(
      "https://formbucket.com/f/buk_yzdVeYupoCavGk0I0J26pcQT",
      { method: "POST", body: formData }
    )

    if (res.status === 200) {
      form.reset()
      alert("message bien envoyé")
    } else {
      alert("erreur d'envoie")
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
      default:
        setMessage(e.target.value)
        break
    }
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contact-section">
        <h3 className="contact-title">
          Contactez <span>moi</span> !
        </h3>
        <form className="contact-form" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Votre nom</label>
            <input
              required
              name="name"
              type="text"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse Email</label>
            <input
              required
              name="email"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              required
              name="message"
              className="form-control"
              rows="5"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <p className="phone-contact">
            <FontAwesomeIcon icon={faPhoneAlt} size="1x" /> 07 71 67 04 64
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
