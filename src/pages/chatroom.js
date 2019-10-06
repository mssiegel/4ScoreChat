import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import ChatroomPage from "../components/ChatroomPage"

const Chatroom = () => (
  <Layout>
    <SEO title="Chatroom" 
      description="Our chatroom where people get paired with each other. Be whomever you want and start start a chat. Have fun and get connected."
    />
    <ChatroomPage />

  </Layout>
)

export default Chatroom
