import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import AboutPage from "../components/AboutPage"


const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutPage/>
  </Layout>
)

export default About
