import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Header headerText="Home" />
      <h1>Hello world of fucking Gatsby!</h1>
      <p>fuck the rest</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  )
}
