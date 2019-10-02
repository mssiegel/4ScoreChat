import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Homepage from "../homepage/Homepage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Homepage/>

  </Layout>
)

export default IndexPage
