import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/common/Layout'
import SEO from '../components/seo'
import ImprovTipsPage from '../components/ImprovTipsPage'

const ImprovTips = () => (
  <Layout>
    <SEO
      title='Improv Tips'
      description='Improve your improv. Read our tips and tricks on how to be an improv superstar.'
    />
    <ImprovTipsPage />
  </Layout>
)

export default ImprovTips
