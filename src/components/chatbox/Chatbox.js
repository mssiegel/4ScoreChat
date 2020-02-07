import React, {useState, useEffect, useRef} from "react"
import "./Chatbox.css"
import ChatboxConversation from './ChatboxConversation'
import Fab from '@material-ui/core/Fab'
import SendIcon from '@material-ui/icons/Send'
let eraseTypingMessage

const Chatbox = ({chat, chatInSession, setChat, setChatInSession, socket, liveChat}) => { 
  const [chatEnded, setChatEnded] = useState(false)
  const [chatEnder, setChatEnder] = useState()
  const [peerTyping, setPeerTyping] = useState(false)
  const [message, setMessage] = useState('')

  const messageInput = useRef(null)

  useEffect(() => {
    if (socket) {

      socket.on('chat end', ()=> {
        setChatEnded(true)
        setChatEnder('Your peer')
      })
      
      socket.on('chat message', msg => {
        setPeerTyping(false)
        clearTimeout(eraseTypingMessage)
        setChat(chat => ({...chat, conversation: [...chat.conversation, ['peer', msg.userName, msg.message]]}))
        scrollToBottomOfChat();
      })

      socket.on('typing', userName => {
        setPeerTyping(userName)
        //clears old timeout if applicable
        if (eraseTypingMessage) clearTimeout(eraseTypingMessage)
        eraseTypingMessage = setTimeout(() => setPeerTyping(false), 4000)
      })
    }

    if (chatInSession) messageInput.current.focus()

    return () => {
      if(socket) {
        socket.off('chat end')
        socket.off('chat message')
        socket.off('typing')
      }
    }
  }, [])

  function sendMessage(e) {
    e.preventDefault()
    if (chat.you && message) {
      setChat({...chat, conversation: [...chat.conversation, ['you', chat.you, message]]})
      setMessage('')
      if (socket) {
        socket.emit('chat message', {
          userName: chat.you,
          message
        })
      scrollToBottomOfChat()
      }
    }
    messageInput.current.focus()
  }

  function endChat() {
    if (socket) socket.emit('end chat')
    setChatEnded(true)
    setChatEnder('You')
  }

  function userTyping(e) {
    setMessage(e.target.value)
    if (socket) socket.emit('typing', chat.you)
  }

  function scrollToBottomOfChat() {
    if(messageInput.current) messageInput.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
    <div className="sample-chat-container">
      <h2 className={`sample-chat-subtitle`} style={{color: chat.titleColor}}>{chat.title}</h2>
      <div className="chatbox">
        {(chatInSession && !chatEnded)  &&
          <div className="sticky-chat-buttons">
            <button className="end-chat btn" onClick={endChat}>End</button>
          </div>
        }
        <ChatboxConversation chat={chat} chatEnded={chatEnded}/>
      </div>
      {liveChat && ( 
        <div className='chatbox-bottom'>
          {chatEnded ? 
            <>
            <p className='left-chat-message'>{chatEnder} left the chat</p>
            <button className='start-new-chat btn' onClick={() => {setChat({...chat, conversation: []}); setChatInSession(false)}}>Erase chat</button>
            </> 
            :
            <>
            <p className='peer-typing-notification'>{peerTyping && `${peerTyping} is typing...`}</p> 
            <form onSubmit={sendMessage}>
              <input className='username' value={chat.you} placeholder='Your Character' maxLength="30" onChange={e => setChat({...chat, you: e.target.value})}/>
              <input className='message' value={message} placeholder='Say something' maxLength="75" onChange={userTyping} ref={messageInput}/>
              <Fab size="small" type='submit' color="secondary" style={{marginLeft: '10px', background: "#940000"}}><SendIcon /></Fab>
            </form>
            </>
          }
        </div>
      )}
    </div>
    </>
  )
}

export default Chatbox