import React from 'react'
import '../chatbox/Conversation.css'

const PrivateConversation = ({ chat, realChat, improvMode }) => {
  const conversation = improvMode ? chat.conversation : realChat.conversation

  return (
    <div className='chatbox-text-wrapper'>
      <p className='grey'>
        Talk as <span className='bold'>your {improvMode ? 'character' : 'real self'}</span> here.
      </p>
      <p className='grey'>
        To speak as your {improvMode ? 'real self' : 'character'}, click the{' '}
        {improvMode ? '"Real chat"' : '"Character chat"'} button.
      </p>

      <div className='empty-space' />
      {conversation.map(([person, character, message], i) => (
        <p key={i}>
          <span className={person}>{character}: </span>
          <span className='chat-text'>{message}</span>
        </p>
      ))}
    </div>
  )
}

export default PrivateConversation
