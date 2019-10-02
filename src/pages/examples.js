import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Examples = () => (
  <Layout>
    <SEO title="Mastery Guide" />
    <h1>Examples</h1>
    <p>Welcome to Examples</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Examples
