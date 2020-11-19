import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <ul style={{ listStyle: `none`, float: `right` }}>
        Navigation:
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
      </ul>
      {children}
    </div>
  )
}