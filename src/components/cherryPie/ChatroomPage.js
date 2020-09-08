import React, { useState, useEffect } from 'react'
//import './ChatroomPage.css'
import Chatbox from './Chatbox'
// import SuggestCharacterButton from './SuggestCharacterButton'
// import ChooseCharacterDiv from './ChooseCharacterDiv'
// import StartChatButton from './StartChatButton'
// import WaitingForPeerMessage from './WaitingForPeerMessage'

const ChatroomPage = ({ socket, randomTip }) => {
  const [waitingForPeer, setWaitingForPeer] = useState(false)
  const [chatInSession, setChatInSession] = useState(false)
  const [chat, setChat] = useState({ you: 'Your character', peer: '', conversation: [] })
  const [realChat, setRealChat] = useState({ realYou: 'Your real name', conversation: [] })

  return (
    <>
      <section className='chatroom-page-wrapper'>
        <h1 className='page-title'>Cherry Pie</h1>
        <p id='tip'>A private chatroom just for Cherry Pie improv. Talk as your real self or as an improv character.</p>
        {/* Have temporarily replaced randomTip with Best Chatting Time    Tip: {randomTip}*/}
      </section>

      <div className='center-chatbox'>
        <Chatbox
          chat={chat}
          setChat={setChat}
          realChat={realChat}
          setRealChat={setRealChat}
          setChatInSession={setChatInSession}
          socket={socket}
        />
      </div>
    </>
  )
}

export default ChatroomPage
