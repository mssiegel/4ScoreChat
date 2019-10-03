import React, {useState, useEffect, useRef} from "react"
import "./Chatbox.css"
import Fab from '@material-ui/core/Fab'
import SendIcon from '@material-ui/icons/Send'
import MoodIcon from '@material-ui/icons/Mood'
let eraseTypingMessage

const characterIcon = {
  color: 'white',
  verticalAlign: 'middle',
  marginLeft: '5px'
}

const Chatbox = ({chat, chatInSession, setChat, suggestCharacter, setChatInSession, socket}) => {
  
  const [chatEnded, setChatEnded] = useState(false)
  const [chatEnder, setChatEnder] = useState()
  const [peerTyping, setPeerTyping] = useState(false)

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
        //clear old timeout if applicable
        if (eraseTypingMessage) clearTimeout(eraseTypingMessage)
        eraseTypingMessage = setTimeout(() => setPeerTyping(false), 4000)
      })
    }

    if (chatInSession) messageInput.current.focus()

    return () => {
      socket.off('chat end')
      socket.off('chat message')
      socket.off('typing')
    }
  }, [])

  function sendMessage(e) {
    e.preventDefault()
    if (chat.you && chat.message) 
      setChat({...chat, message: '', conversation: [...chat.conversation, ['you', chat.you, chat.message]]})
    if (socket) {
      socket.emit('chat message', {
        userName: chat.you,
        message: chat.message
      })
    messageInput.current.focus()
    scrollToBottomOfChat()
    }
  }

  function endChat() {
    if (socket) socket.emit('end chat')
    setChatEnded(true)
    setChatEnder('You')
  }

  function userTyping(e) {
    setChat({...chat, message: e.target.value})
    if (socket) socket.emit('typing', chat.you)
  }

  function scrollToBottomOfChat() {
    if(messageInput.current) messageInput.current.scrollIntoView({behavior: "smooth"})
  }

  const renderConversation = ({peer, conversation}) => (
      <div className={`chatbox-text-wrapper ${chatEnded ? 'low-opacity' : ''}`}>
        <div className="peer-announcement">
          <p className='grey'>You matched with <span className="peer">{peer}</span>...</p>
          <p className='grey'>{chat.startTime}</p>
        </div>
        {conversation.map(([person, character, message], i) => 
          (<p key={i}><span className={person}>{character}: </span><span className="chat-text">{message}</span></p>)
        )}
      </div>
  )
  
  return (
    <>
    <div className="sample-chat-container">
      <h2 className={`sample-chat-subtitle`} style={{color: chat.titleColor}}>{chat.title}</h2>
      <div className="chatbox">
        {(chatInSession && !chatEnded)  &&
          <div className="chat-buttons">
            <button className="suggest-character btn" onClick={suggestCharacter}>Suggest <MoodIcon style={characterIcon}/></button>
            <button className="end-chat btn" onClick={endChat}>End</button>
          </div>
        }
        {renderConversation(chat)}
      </div>
      <div className='chatbox-bottom'>
        {chatEnded ? 
          <>
          <p className='left-chat-message'>{chatEnder} left the chat</p>
          <button className='start-new-chat btn' onClick={() => {setChat({...chat, conversation: [], message: ''}); setChatInSession(false)}}>Erase chat</button>
          </> 
          :
          <>
          <p className='peer-typing-notification'>{peerTyping && `${peerTyping} is typing...`}</p> 
          <form onSubmit={sendMessage}>
            <input className='username' value={chat.you} placeholder='Your Character' maxLength="30" onChange={e => setChat({...chat, you: e.target.value})}/>
            <input className='message' value={chat.message} placeholder='Say something' maxLength="75" onChange={userTyping} ref={messageInput}/>
            <Fab size="small" type='submit' color="secondary" style={{marginLeft: '10px', background: "#940000"}}><SendIcon /></Fab>
          </form>
          </>
        }
      </div>
    </div>
    </>
  )
}

export default Chatbox