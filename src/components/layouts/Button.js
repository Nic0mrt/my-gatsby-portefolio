import React from "react"
import { Link } from "gatsby"
import "./button.css"

const Button = props => {
  const width = props.width ? props.width : ""

  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <div className="my-custom-btn" style={{ width }}>
        {props.children}
      </div>
    </Link>
  )
}

export default Button
