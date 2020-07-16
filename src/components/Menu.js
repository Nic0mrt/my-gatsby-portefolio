import React, { useState } from "react"
import "./menu.css"
import Header from "./Header"

const Menu = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="menu-wrapper">
      <div className={`menu ${show ? "open" : ""}`}>
        <Header />
      </div>
      <div
        className={`menu-icon ${show ? "active" : ""}`}
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
