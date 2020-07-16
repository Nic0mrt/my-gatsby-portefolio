import React from "react"
import Menu from "../components/Menu"
import "./layout.css"
import PropTypes from "prop-types"

export default function Layout({ children }) {
  return (
    <div className="content-wrapper">
      <Menu></Menu>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
