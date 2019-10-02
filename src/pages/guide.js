import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const MasteryGuide = () => (
  <Layout>
    <SEO title="Mastery Guide" />
    <h1>Mastery Guide</h1>
    <p>Welcome to Mastery Guide</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MasteryGuide
