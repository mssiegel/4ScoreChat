import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import ExamplesPage from "../components/ExamplePage"

const Examples = () => (
  <Layout>
    <SEO title="Examples"
      description="For entertainment, read some thrilling and exciting sample chats created on 4ScoreChat."
    />
    <ExamplesPage />

  </Layout>
)

export default Examples
