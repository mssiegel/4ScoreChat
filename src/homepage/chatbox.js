import React, {useState} from "react"
import "./chatbox.css"
import Fab from '@material-ui/core/Fab'
import SendIcon from '@material-ui/icons/Send';
import MoodIcon from '@material-ui/icons/Mood';

const characterIcon = {
  color: 'white',
  verticalAlign: 'middle',
  marginLeft: '5px'
}

const Chatbox = ({chat, chatInSession, setChat, suggestCharacter, setChatInSession}) => {
  const [chatEnded, setChatEnded] = useState(false)

  function sendMessage(e) {
    if (chat.you && chat.message) 
      setChat({...chat, message: '', conversation: [...chat.conversation, ['you', chat.you, chat.message]]})
    e.preventDefault()
  }

  const renderConversation = ({peer, conversation}) => (
      <div className='chatbox-text-wrapper'>
        <div className="peer-announcement">
          <p><span className="grey">You matched with </span><span className="peer">{peer}</span></p>
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
        {chatInSession &&
          <div className="chat-buttons">
            <button className="suggest-character btn" onClick={suggestCharacter}>Suggest <MoodIcon style={characterIcon}/></button>
            <button className="end-chat btn" onClick={() => {setChatEnded(true)}}>End</button>
          </div>
        }
        {renderConversation(chat)}
      </div>
      <div className='chatbox-bottom'>
        {chatEnded ? 
          <>
          <p className='left-chat-message'>You left the chat</p>
          <button className='start-new-chat btn' onClick={() => {setChat({...chat, conversation: []}); setChatInSession(false)}}>Start new chat</button>
          </> 
          : 
          <form onSubmit={sendMessage}>
            <input className='username' value={chat.you} placeholder='Your Character' maxLength="30" onChange={e => setChat({...chat, you: e.target.value})}/>
            <input className='message' value={chat.message} placeholder='Say something' maxLength="75" onChange={e => setChat({...chat, message: e.target.value})}/>
            <Fab size="small" type='submit' color="secondary" style={{marginLeft: '10px', background: "#940000"}}><SendIcon /></Fab>
          </form>
        }
      </div>
    </div>
    </>
  )
}

export default Chatbox