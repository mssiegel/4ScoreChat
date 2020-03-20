import React from 'react'
import './Chatbox.css'
import Conversation from './Conversation'

const SampleChatbox = ({ chat }) => {
  const subtitleStyle = {
    textAlign: 'center',
    color: chat.titleColor || 'white',
    fontWeight: 'normal',
    marginBottom: '12px',
    letterSpacing: '0.5px'
  }

  return (
    <>
      <div className='sample-chat-container'>
        <h2 style={subtitleStyle}>{chat.title}</h2>
        <div className='chatbox'>
          <Conversation chat={chat} />
        </div>
      </div>
    </>
  )
}

export default SampleChatbox
