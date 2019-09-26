import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutPage from "../components/aboutPage"


const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutPage/>
  </Layout>
)

export default About
