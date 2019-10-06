import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import AboutPage from "../components/AboutPage"

const About = () => (
  <Layout>
    <SEO title="About"
      description="Clean instant improv. We request all chats stay somewhat clean and family-friendly."
    />
    <AboutPage/>
  </Layout>
)

export default About
