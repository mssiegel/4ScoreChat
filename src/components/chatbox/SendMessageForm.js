import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import SendIcon from '@material-ui/icons/Send'
import './SendMessageForm.css'

const SendMessageForm = ({
  chat,
  socket,
  scrollToBottomOfChat,
  setChat,
  realChat,
  setRealChat,
  improvMode,
  messageInput,
}) => {
  const [message, setMessage] = useState('')

  function sendMessage(e) {
    e.preventDefault()
    if (chat.you && message) {
      improvMode
        ? setChat({ ...chat, conversation: [...chat.conversation, ['you', chat.you, message]] })
        : setRealChat([...realChat, ['you', 'Real You', message]])
      setMessage('')
      if (socket) {
        socket.emit('chat message', {
          userName: chat.you,
          message,
          improvMode,
        })
        scrollToBottomOfChat()
      }
    }
    messageInput.current.focus()
  }

  function userTyping(e) {
    setMessage(e.target.value)
    if (socket) socket.emit('typing', improvMode ? chat.you : 'Your Peer')
  }

  return (
    <form onSubmit={sendMessage} className='send-message-form'>
      {improvMode ? (
        <input
          className='username'
          value={chat.you}
          placeholder='Your Character'
          maxLength='30'
          onChange={e => setChat({ ...chat, you: e.target.value })}
        />
      ) : (
        <p className='current-user'>Real You</p>
      )}

      <input
        className='message'
        value={message}
        placeholder='Say something'
        maxLength='75'
        onChange={userTyping}
        ref={messageInput}
      />
      <Fab
        size='small'
        type='submit'
        color='secondary'
        style={{ marginLeft: '10px', background: improvMode ? '#940000' : '#0070FF' }}
      >
        <SendIcon />
      </Fab>
    </form>
  )
}

export default SendMessageForm
