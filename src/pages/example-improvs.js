import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/common/Layout'
import SEO from '../components/seo'
import ExampleImprovsPage from '../components/ExampleImprovsPage'

const ExampleImprovs = () => (
  <Layout>
    <SEO
      title='Example Improvs'
      description='For entertainment, read some thrilling and exciting sample chats created on 4ScoreChat.'
    />
    <ExampleImprovsPage />
  </Layout>
)

export default ExampleImprovs
