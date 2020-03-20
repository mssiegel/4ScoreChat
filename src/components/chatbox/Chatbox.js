import React, { useState, useEffect, useRef } from 'react'
import './Chatbox.css'
import StickyButtons from './StickyButtons'
import Conversation from './Conversation'
import ChatEndedMessage from './ChatEndedMessage'
import SendMessageForm from './SendMessageForm'

let eraseTypingMessage

const Chatbox = ({ chat, setChat, setChatInSession, socket }) => {
  const [chatEnded, setChatEnded] = useState(false)
  const [chatEnder, setChatEnder] = useState()
  const [peerTyping, setPeerTyping] = useState(false)

  const messageInput = useRef(null)

  useEffect(() => {
    if (socket) {
      socket.on('chat end', () => {
        setChatEnded(true)
        setChatEnder('Your peer')
      })

      socket.on('chat message', msg => {
        setPeerTyping(false)
        clearTimeout(eraseTypingMessage)
        setChat(chat => ({ ...chat, conversation: [...chat.conversation, ['peer', msg.userName, msg.message]] }))
        scrollToBottomOfChat()
      })

      socket.on('typing', userName => {
        setPeerTyping(userName)
        //clears old timeout if applicable
        if (eraseTypingMessage) clearTimeout(eraseTypingMessage)
        eraseTypingMessage = setTimeout(() => setPeerTyping(false), 4000)
      })
    }

    if (!chatEnded) messageInput.current.focus()

    return () => {
      if (socket) {
        socket.off('chat end')
        socket.off('chat message')
        socket.off('typing')
      }
    }
  }, [])

  function endChat() {
    if (socket) socket.emit('end chat')
    setChatEnded(true)
    setChatEnder('You')
  }

  function scrollToBottomOfChat() {
    if (messageInput.current) messageInput.current.scrollIntoView({ behavior: 'smooth' })
  }

  function eraseChat() {
    setChat({ ...chat, conversation: [] })
    setChatInSession(false)
  }

  return (
    <>
      <div className='sample-chat-container'>
        <div className='chatbox'>
          {!chatEnded && <StickyButtons endChat={endChat} />}
          <Conversation chat={chat} chatEnded={chatEnded} />
        </div>

        <div className='chatbox-bottom'>
          {chatEnded ? (
            <ChatEndedMessage chatEnder={chatEnder} eraseChat={eraseChat} />
          ) : (
            <>
              <p className='peer-typing-notification'>{peerTyping && `${peerTyping} is typing...`}</p>
              <SendMessageForm
                chat={chat}
                socket={socket}
                setChat={setChat}
                scrollToBottomOfChat={scrollToBottomOfChat}
                messageInput={messageInput}
              />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Chatbox
