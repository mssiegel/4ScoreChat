import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Homepage from "../homepage/homepage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Homepage/>

  </Layout>
)

export default IndexPage
