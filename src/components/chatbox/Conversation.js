import React from 'react'
import './Conversation.css'

const Conversation = ({ chat, realChat, improvMode, sampleOnly }) => {
  const { you, peer } = chat
  const conversation = improvMode ? chat.conversation : realChat
  return (
    <div className={'chatbox-text-wrapper'}>
      <div className='peer-announcement'>
        <p className='grey'>
          Hi <span className='you'>{improvMode ? you : 'Real You'}</span>.
        </p>
        <p className='grey'>{chat.startTime}</p>
      </div>

      <p className='grey'>
        You matched with <span className='peer'>{improvMode ? peer : 'Your Peer'}</span>.
      </p>

      {!sampleOnly && (
        <>
          <p className='grey'>
            Talk as <span className='bold'>your {improvMode ? 'character' : 'real self'}</span> here.
          </p>
          <p className='grey'>
            To speak as your {improvMode ? 'real self' : 'character'}, click the{' '}
            {improvMode ? '"Real chat"' : '"Character chat"'} button.
          </p>
        </>
      )}

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

export default Conversation
