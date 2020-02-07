import React, {useState} from "react"
import Fab from '@material-ui/core/Fab'
import SendIcon from '@material-ui/icons/Send'
import './SendMessageForm.css'

const SendMessageForm = ({chat, socket, scrollToBottomOfChat, setChat, messageInput}) => {
  const [message, setMessage] = useState('')
  
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
  
  function userTyping(e) {
    setMessage(e.target.value)
    if (socket) socket.emit('typing', chat.you)
  }
  
  return (
    <form onSubmit={sendMessage}>
      <input className='username' value={chat.you} placeholder='Your Character' maxLength="30" onChange={e => setChat({...chat, you: e.target.value})}/>
      <input className='message' value={message} placeholder='Say something' maxLength="75" onChange={userTyping} ref={messageInput}/>
      <Fab size="small" type='submit' color="secondary" style={{marginLeft: '10px', background: "#940000"}}><SendIcon /></Fab>
    </form>
  )
}

  export default SendMessageForm