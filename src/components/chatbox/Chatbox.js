import React, { useState, useEffect, useRef } from 'react'
import './Chatbox.css'
import StickyButtons from './StickyButtons'
import Conversation from './Conversation'
import ChatEndedMessage from './ChatEndedMessage'
import SendMessageForm from './SendMessageForm'

let eraseTypingMessage

const Chatbox = ({ chat, setChat, setChatInSession, realChat, setRealChat, socket }) => {
  const [unread, setUnread] = useState(0)
  const [improvMode, setImprovMode] = useState(true)
  const [chatEnded, setChatEnded] = useState(false)
  const [chatEnder, setChatEnder] = useState()
  const [peerTyping, setPeerTyping] = useState(false)

  const messageInput = useRef(null)
  const backgroundColor = { background: improvMode ? '#f8e5e0' : '#E0F8FF' }

  useEffect(() => {
    if (socket) {
      socket.on('chat end', () => {
        setChatEnded(true)
        setChatEnder('Your peer')
      })

      socket.on('chat message', msg => {
        setPeerTyping(false)
        clearTimeout(eraseTypingMessage)
        if (improvMode !== msg.improvMode) setUnread(unread => unread + 1)
        msg.improvMode
          ? setChat(chat => ({ ...chat, conversation: [...chat.conversation, ['peer', msg.userName, msg.message]] }))
          : setRealChat(realChat => [...realChat, ['peer', 'Your Peer', msg.message]])
        scrollToBottomOfChat()
      })

      socket.on('typing', userName => {
        setPeerTyping(userName)
        //clears old timeout if applicable
        if (eraseTypingMessage) clearTimeout(eraseTypingMessage)
        eraseTypingMessage = setTimeout(() => setPeerTyping(false), 4000)
      })
    }

    //If chat is on, then message input exists and focus on it
    if (!chatEnded) messageInput.current.focus()

    return () => {
      if (socket) {
        socket.off('chat end')
        socket.off('chat message')
        socket.off('typing')
      }
    }
  }, [improvMode])

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
    setRealChat([])
    setChatInSession(false)
  }

  return (
    <>
      <div className='sample-chat-container'>
        <div className='chatbox' style={backgroundColor}>
          <StickyButtons
            endChat={endChat}
            chatEnded={chatEnded}
            improvMode={improvMode}
            setImprovMode={setImprovMode}
            scrollToBottomOfChat={scrollToBottomOfChat}
            unread={unread}
            setUnread={setUnread}
          />
          <Conversation chat={chat} realChat={realChat} improvMode={improvMode} />
        </div>

        <div className='chatbox-bottom' style={backgroundColor}>
          {chatEnded ? (
            <ChatEndedMessage chatEnder={chatEnder} eraseChat={eraseChat} />
          ) : (
            <>
              <p className='peer-typing-notification' style={backgroundColor}>
                {peerTyping && `${peerTyping} is typing...`}
              </p>
              <SendMessageForm
                chat={chat}
                socket={socket}
                setChat={setChat}
                realChat={realChat}
                setRealChat={setRealChat}
                improvMode={improvMode}
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
