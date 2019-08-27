import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Chatroom = () => (
  <Layout>
    <SEO title="Chatroom" />
    <h1>Chatroom</h1>
    <p>Welcome to Chatroom</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Chatroom
