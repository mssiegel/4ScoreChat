import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import ChatroomPage from "../components/ChatroomPage"
import io from 'socket.io-client'

const Chatroom = () => {
  //Set up socket.io connection to server
  //If client is at 4scorechat domain name, use heroku backend server else use local host backend server
  //const serverUrl = window.location.href === 'https://www.4scorechat.com/' ? 'https://scorechat.herokuapp.com/' : 'http://localhost:8000'
  const serverUrl = 'https://scorechat.herokuapp.com/'
  const socket = io(serverUrl)
  useEffect(()=> {
   return () => {
     socket.disconnect()
   } 
  }, []) 

  return ( 
  <Layout>
    <SEO title="Chatroom" 
      description="Our chatroom where people get paired with each other. Be whomever you want and start start a chat. Have fun and get connected."
    />
    <ChatroomPage socket={socket}/>

  </Layout>
 )
}

export default Chatroom
