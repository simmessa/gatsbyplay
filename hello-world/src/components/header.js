import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <div>
      <h1>{props.headerText}</h1>
      <ul>
        Navigation:
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}