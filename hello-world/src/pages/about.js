import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
        <Header headerText="About Gatsby" />
        <h1>About fucking Gatsby</h1>
        <p>Such wow. Very React.</p>
    </Layout>
  )
}