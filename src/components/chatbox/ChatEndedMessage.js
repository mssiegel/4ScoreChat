import React from 'react'
import './ChatEndedMessage.css'

const ChatEndedMessage = ({ chatEnder, eraseChat }) => {
  return (
    <>
      <p className='left-chat-message'>{chatEnder} left the chat</p>
      <button className='start-new-chat btn' onClick={eraseChat}>
        Start new chat
      </button>
    </>
  )
}

export default ChatEndedMessage
