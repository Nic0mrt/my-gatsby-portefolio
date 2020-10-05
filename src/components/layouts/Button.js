import React from "react"
import { Link } from "gatsby"
import "./button.css"

const Button = props => {
  const width = props.width ? props.width : ""
  const target = props.newTab ? "_blank" : null

  return (
    <Link to={props.link} target={target} style={{ textDecoration: "none" }}>
      <div className="my-custom-btn" style={{ width }}>
        {props.children}
      </div>
    </Link>
  )
}

export default Button
