import React, { useEffect } from 'react'

import Layout from '../components/common/Layout'
import SEO from '../components/seo'
import ChatroomPage from '../components/chatroomPage/ChatroomPage'
import io from 'socket.io-client'

//Initialize socket outside of Chatroom component so as to keep socket unchanged even if user clicks Chatroom link in navbar
const socket = io('https://scorechat.herokuapp.com/')

const Chatroom = () => {
  socket.connect()
  //disconnects socket when user leaves Chatroom Page
  useEffect(() => () => socket.disconnect(), [])

  const tips = [
    'feel free to EXAGGERATE your words by using capital letters',
    'use your partner for leverage. Together, shoot for the skies',
    'for comedy, agree with your peer and dramatize what they say',
    'smile because it will make you happier',
    'do not keep your peers waiting while you write long pagragraphs. Instead, write shorter lines',
    'blank your mind to the past and future. Stay focused on the NOW.',
    'choose whatever crazy character tickles your fancy',
    'do not enter with a predetermined storyline. Enter with a blank mind. Create the plot with each back-and-forth response',
    'try to get better and better. When your chat ends, review it. Look for ways to improve your chatting skills',
    'cooperation works wonders. See your peer as your partner in creating a beautiful storyline',
    "chats can get intense. Come prepared with a box of tissues and a shoulder to lean on...or don't",
    'partner with your peer to create deep, intense, emotional storylines',
  ]
  const randomTip = tips[Math.floor(Math.random() * tips.length)]

  return (
    <Layout>
      <SEO
        title='Chatroom'
        description='Our chatroom where people get paired with each other. Be whomever you want and start start a chat. Have fun and get connected.'
      />
      <ChatroomPage socket={socket} randomTip={randomTip} />
    </Layout>
  )
}

export default Chatroom
