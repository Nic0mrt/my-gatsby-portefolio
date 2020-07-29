import React from "react"
import "./header.css"
import avatar from "../images/avatar.jpg"
import { Link } from "gatsby"

const Header = props => {
  return (
    <header className="menu__header">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <img alt="Nicolas développeur" src={avatar}></img>
      </Link>

      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="menu__title">
          <p>Nicolas Maret</p>
          <h1>Développeur Web</h1>
        </div>
      </Link>

      <ul className="menu__navigation">
        <li>
          <Link
            to="/"
            activeClassName="active"
            activeStyle={{ color: "white" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            activeClassName="active"
            activeStyle={{ color: "white" }}
          >
            A propos
          </Link>
        </li>
        <li>
          <Link
            to="/Projects"
            activeClassName="active"
            activeStyle={{ color: "white" }}
          >
            Mes projets
          </Link>
        </li>
        <li>
          <Link
            to="/Blog"
            activeClassName="active"
            activeStyle={{ color: "white" }}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            activeClassName="active"
            activeStyle={{ color: "white" }}
          >
            Contact
          </Link>
        </li>
      </ul>
      <ul className="menu__social-medias">
        <li>
          <i className="fab fa-facebook-f"></i>
        </li>
        <li>
          <i className="fab fa-instagram"></i>
        </li>
        <li>
          <i className="fab fa-github"></i>
        </li>
        <li>
          <i className="fab fa-linkedin-in"></i>
        </li>
      </ul>

      <div className="menu__download-btn">Télécharger CV</div>
      <div className="menu__copyright">
        all rights reserved. Made with React and Gatsby
      </div>
    </header>
  )
}

export default Header
