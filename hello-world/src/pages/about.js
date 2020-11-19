import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
        <Header headerText="About Gatsby" />
        <h1>About fucking Gatsby</h1>
        <p>Such wow. Very React.</p>
    </div>
  )
}