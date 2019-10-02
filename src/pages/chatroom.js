import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import ChatroomPage from "../components/ChatroomPage"



const Chatroom = () => (
  <Layout>
    <SEO title="Chatroom" />
    <ChatroomPage />

  </Layout>
)

export default Chatroom
