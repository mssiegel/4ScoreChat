import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/common/Layout'
import SEO from '../components/seo'
import Homepage from '../components/homepage/Homepage'

const IndexPage = () => (
  <Layout>
    <SEO
      title='Home'
      description="Choose your character and get ready for some clean improv. We'll pair you with someone for a fun chat adventure. Please keep chats family friendly."
    />
    <Homepage />
  </Layout>
)

export default IndexPage
