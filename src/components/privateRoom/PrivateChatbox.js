import React, { useState, useEffect, useRef } from 'react'
import Fab from '@material-ui/core/Fab'
import SendIcon from '@material-ui/icons/Send'

import './PrivateChatbox.css'
import '../chatbox/Chatbox.css'
import PrivateStickyButtons from './PrivateStickyButtons'
import PrivateConversation from './PrivateConversation'
import PrivateSendMessageForm from './PrivateSendMessageForm'

let eraseTypingMessage

const PrivateChatbox = ({ chat, setChat, realChat, setRealChat, socket, roomId }) => {
  const [unread, setUnread] = useState(0)
  const [improvMode, setImprovMode] = useState(false)
  const [peerTyping, setPeerTyping] = useState(false)
  const [hasRealName, setHasRealName] = useState(false)

  const messageInput = useRef(null)
  const backgroundColor = { background: improvMode ? '#f8e5e0' : '#E0F8FF' }
  console.log('unread', unread)
  useEffect(() => {
    console.log(socket.id)
    if (socket) {
      socket.on('user entered', realName => {
        console.log('user entered realName:', realName)
        setRealChat(realChat => ({
          ...realChat,
          conversation: [...realChat.conversation, ['you', '', `${realName} has joined the chat`]],
        }))
      })

      socket.on('user left', realName => {
        console.log('user left realName:', realName)
        if (improvMode) {
          setUnread(unread => unread + 1)
          console.log('HERERERE')
        }
        setRealChat(realChat => ({
          ...realChat,
          conversation: [...realChat.conversation, ['you', '', `${realName} has left the chat`]],
        }))
      })

      socket.on('private chat message', message => {
        setPeerTyping(false)
        clearTimeout(eraseTypingMessage)
        console.log(realChat)
        if (improvMode !== message.improvMode) setUnread(unread => unread + 1)
        message.improvMode
          ? setChat(chat => ({
              ...chat,
              conversation: [...chat.conversation, ['peer', message.sender, message.text]],
            }))
          : setRealChat(realChat => ({
              ...realChat,
              conversation: [...realChat.conversation, ['peer', message.sender, message.text]],
            }))
        scrollToBottomOfChat()
      })

      socket.on('typing', userName => {
        setPeerTyping(userName)
        //clears old timeout if applicable
        if (eraseTypingMessage) clearTimeout(eraseTypingMessage)
        eraseTypingMessage = setTimeout(() => setPeerTyping(false), 4000)
      })
    }

    return () => {
      if (socket) {
        socket.off('user entered')
        socket.off('user left')
        socket.off('private chat message')
        socket.off('typing')
      }
    }
  }, [improvMode, realChat, setChat, setRealChat, socket])

  useEffect(() => {
    if (messageInput.current) messageInput.current.focus()
  }, [improvMode, hasRealName])

  function scrollToBottomOfChat() {
    if (messageInput.current) messageInput.current.scrollIntoView({ behavior: 'smooth' })
  }

  function submitRealName(e) {
    console.log('ran submitRealName(e)')
    console.log(realChat.you)
    e.preventDefault()
    if (!realChat.you) return

    setHasRealName(true)
    setRealChat(realChat => ({
      ...realChat,
      conversation: [...realChat.conversation, ['you', '', `${realChat.you} has joined the chat`]],
    }))

    if (socket) {
      socket.emit('enter private room', {
        realName: realChat.you,
        roomId,
      })
    }
  }

  return (
    <>
      <div className='chat-container'>
        <div className={`chatbox ${!hasRealName ? 'private-center-children' : ''}`} style={backgroundColor}>
          {/* TODO: Refactor this div to use DRY */}
          {!hasRealName && !improvMode && (
            <form onSubmit={submitRealName}>
              <p className='private-enter-name black'>Your real name:</p>
              <input
                maxLength='25'
                value={realChat.you}
                placeholder='Your name'
                className='private-username'
                onChange={e => setRealChat({ ...realChat, you: e.target.value })}
              ></input>
              <Fab
                size='small'
                type='submit'
                color='secondary'
                style={{ marginLeft: '10px', background: improvMode ? '#940000' : '#0070FF' }}
              >
                <SendIcon />
              </Fab>
            </form>
          )}
          {hasRealName && (
            <>
              <PrivateStickyButtons
                improvMode={improvMode}
                setImprovMode={setImprovMode}
                unread={unread}
                setUnread={setUnread}
              />
              <PrivateConversation chat={chat} realChat={realChat} improvMode={improvMode} />
            </>
          )}
        </div>

        <div className='chatbox-bottom private-min-height-bottom' style={backgroundColor}>
          {hasRealName && (
            <>
              <p className='peer-typing-notification' style={backgroundColor}>
                {peerTyping && `${peerTyping} is typing...`}
              </p>
              <PrivateSendMessageForm
                chat={chat}
                socket={socket}
                setChat={setChat}
                realChat={realChat}
                setRealChat={setRealChat}
                improvMode={improvMode}
                scrollToBottomOfChat={scrollToBottomOfChat}
                messageInput={messageInput}
                roomId={roomId}
              />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default PrivateChatbox
