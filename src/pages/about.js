import React from "react"
import { Link } from "gatsby"

import Layout from "../components/common/Layout"
import SEO from "../components/seo"
import AboutPage from "../components/AboutPage"

const About = () => (
  <Layout>
    <SEO title="About"
      description="4ScoreChat provides clean instant improv. We request all chats stay somewhat clean and family-friendly."
    />
    <AboutPage/>
  </Layout>
)

export default About
