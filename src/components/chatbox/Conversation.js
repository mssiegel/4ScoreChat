import React from 'react'
import './Conversation.css'

const Conversation = ({ chat, chatEnded }) => {
  const { peer, conversation } = chat
  return (
    <div className={`chatbox-text-wrapper ${chatEnded ? 'low-opacity' : ''}`}>
      <div className='peer-announcement'>
        <p className='grey'>
          You matched with <span className='peer'>{peer}</span>...
        </p>
        <p className='grey'>{chat.startTime}</p>
      </div>
      {conversation.map(([person, character, message], i) => (
        <p key={i}>
          <span className={person}>{character}: </span>
          <span className='chat-text'>{message}</span>
        </p>
      ))}
    </div>
  )
}

export default Conversation
