import React, { useState, useEffect } from 'react'
import Filter from 'bad-words';
import './Conversation.css'

function filterWords(words) {
  const filter = new Filter();
  try {
    return filter.clean(words);
    // the filter throws an error if the string only has non-letter characters
  } catch (e) {
    return words;
  }
}

const Conversation = ({ chat, realChat, improvMode, sampleOnly }) => {
  const [originalChar, setOriginalChar] = useState('')
  useEffect(() => {
    setOriginalChar(chat.you)
  }, [])

  const you = improvMode ? originalChar : 'Real You'
  const peer = improvMode ? chat.peer : 'Your Peer'
  const conversation = improvMode ? chat.conversation : realChat

  return (
    <div className='chatbox-text-wrapper'>
      <div className='peer-announcement'>
        <p className='grey'>
          Hi <span className='you'>{you}</span>.
        </p>
        <p className='grey'>{chat.startTime}</p>
      </div>

      <p className='grey'>
        You matched with <span className='peer'>{peer}</span>.
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
          <span className='chat-text'>{filterWords(message)}</span>
        </p>
      ))}
    </div>
  )
}

export default Conversation
