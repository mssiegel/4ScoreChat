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
        : setRealChat({ ...realChat, conversation: [...realChat.conversation, ['you', realChat.realYou, message]] })
      setMessage('')
      if (socket) {
        console.log('message sent')
        socket.emit('chat message', {
          userName: improvMode ? chat.you : realChat.realYou,
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
        <input
          className='username'
          value={realChat.realYou}
          placeholder='Your Character'
          maxLength='30'
          onChange={e => setRealChat({ ...realChat, realYou: e.target.value })}
        />
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
