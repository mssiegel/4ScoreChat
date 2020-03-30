import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/common/Layout'
import SEO from '../components/seo'
import SinglePlayerPage from '../components/SinglePlayerPage'

const ImprovTips = () => (
  <Layout>
    <SEO
      title='Single Player'
      description='Improve your improv. Read our tips and tricks on how to be an improv superstar.'
    />
    <SinglePlayerPage />
  </Layout>
)

export default ImprovTips
