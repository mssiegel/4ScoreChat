import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/common/Layout'
import PrivateRoom from '../components/PrivateRoom'

/*
  Displays a private chatroom at `/private-room/:chatId`
  `/private-room` basepath is set in gasby-config.js
  Documentation: gatsbyjs.org/docs/client-only-routes-and-user-authentication/
*/

const PrivateChatroom = () => {
  return (
    <Layout>
      <Router basepath='/private-room'>
        <PrivateRoom path='/:chatId' />
      </Router>
    </Layout>
  )
}
export default PrivateChatroom
