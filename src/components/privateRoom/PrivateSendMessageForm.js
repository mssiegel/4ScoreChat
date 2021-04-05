import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import SendIcon from '@material-ui/icons/Send'

import '../chatbox/SendMessageForm.css'
import SuggestCharacterButton from '../chatroomPage/SuggestCharacterButton'

const PrivateSendMessageForm = ({
  chat,
  socket,
  scrollToBottomOfChat,
  setChat,
  realChat,
  setRealChat,
  improvMode,
  messageInput,
  roomId,
}) => {
  const [message, setMessage] = useState('')

  function sendMessage(e) {
    console.log('sendMessage(e) ran!!!')
    e.preventDefault()
    if (!improvMode && message) {
      setRealChat({ ...realChat, conversation: [...realChat.conversation, ['you', realChat.you, message]] })
      setMessage('')
      scrollToBottomOfChat()

      if (socket) {
        socket.emit('private chat message', {
          sender: realChat.you,
          roomId,
          text: message,
          improvMode,
        })
      }
    }

    if (improvMode && chat.you && message) {
      console.log('message', message)
      improvMode
        ? setChat({ ...chat, conversation: [...chat.conversation, ['you', chat.you, message]] })
        : setRealChat([...realChat, ['you', 'Real You', message]])
      if (socket) {
        socket.emit('chat message', {
          userName: chat.you,
          message,
          improvMode,
        })
      }
      setMessage('')
      scrollToBottomOfChat()
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
        <p className='current-user'>{realChat.you}</p>
      )}

      {improvMode && !chat.you && (
        <div>
          <br />
          <SuggestCharacterButton waitingForPeer={false} setChat={setChat} chat={chat} />
        </div>
      )}

      {(!improvMode || chat.you) && (
        <>
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
        </>
      )}
    </form>
  )
}

export default PrivateSendMessageForm
