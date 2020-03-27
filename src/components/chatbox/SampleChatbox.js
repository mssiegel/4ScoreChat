import React from 'react'
import './Chatbox.css'
import Conversation from './Conversation'

const SampleChatbox = ({ chat, improvMode = true, realChat }) => {
  const subtitleStyle = {
    textAlign: 'center',
    color: chat.titleColor || 'white',
    fontWeight: 'normal',
    marginBottom: '12px',
    marginTop: '20px',
    letterSpacing: '0.5px'
  }

  const backgroundColor = { background: improvMode ? '#f8e5e0' : '#E0F8FF' }

  return (
    <>
      <div className='sample-chat-container'>
        <h2 style={subtitleStyle}>{chat.title}</h2>
        <div className='chatbox' style={backgroundColor}>
          <Conversation chat={chat} improvMode={improvMode} realChat={realChat} sampleOnly={true} />
        </div>
      </div>
    </>
  )
}

export default SampleChatbox
