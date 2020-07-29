import React, { useState } from "react"
import "./menu.css"
import Header from "./Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

const Menu = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="menu-wrapper">
      <div className="social-bar">
        <Link
          to="https://github.com/Spartack"
          style={{ textDecoration: "none" }}
        >
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/nicolas-maret-linkedin"
          style={{ textDecoration: "none" }}
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
        </Link>
        <Link
          to="https://www.instagram.com/nic0_mrt/"
          style={{ textDecoration: "none" }}
        >
          <FontAwesomeIcon icon={faInstagram} size="1x" />{" "}
        </Link>
      </div>
      <div className={`menu ${show ? "open" : ""}`}>
        <Header />
      </div>
      <div
        role="button"
        tabIndex={0}
        className={`menu-icon-button ${show ? "active" : ""}`}
        onClick={() => setShow(!show)}
      >
        <span className="first-bar"></span>
        <span className="second-bar"></span>
        <span className="third-bar"></span>
      </div>
    </div>
  )
}
export default Menu
