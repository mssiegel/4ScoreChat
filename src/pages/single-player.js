import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/common/Layout'
import SEO from '../components/seo'
import SinglePlayerPage from '../components/SinglePlayerPage'

const ImprovTips = () => (
  <Layout>
    <SEO title='Single Player' description='Create your own conversations. Write your own chats.' />
    <SinglePlayerPage />
  </Layout>
)

export default ImprovTips
