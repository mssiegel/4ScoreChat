import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ChatroomPage from "../components/chatroomPage"


const Chatroom = () => (
  <Layout>
    <SEO title="Chatroom" />
    <ChatroomPage/>

  </Layout>
)

export default Chatroom
