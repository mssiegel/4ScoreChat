import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/common/Layout'
import SEO from '../components/seo'
import ContactPage from '../components/ContactPage'

const Contact = () => (
  <Layout>
    <SEO title='Contact' description='Contact us for any questions you might have.' />
    <ContactPage />
  </Layout>
)

export default Contact
