import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/common/Layout'
import SEO from '../components/seo'
import PrivateRoom from '../components/PrivateRoom'
import PrivateRoomsPage from '../components/PrivateRoomsPage'

/*
  `/private-rooms` basepath is set in gasby-config.js
  Docs: gatsbyjs.org/docs/client-only-routes-and-user-authentication
*/

const PrivateRooms = () => {
  return (
    <Layout>
      <SEO
        title='Private Rooms'
        description='Create a private room for just you and your friend(s). Only those whom you invite will be able to access the room.'
      />
      <Router basepath='/private-rooms'>
        <PrivateRoomsPage path='/' />
        <PrivateRoom path='/:roomId' />
      </Router>
    </Layout>
  )
}

export default PrivateRooms
