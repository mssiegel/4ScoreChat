import React from "react"
import './ChooseCharacterDiv.css'

const ChooseCharacterDiv = ({waitingForPeer, chat, setChat}) => {
  return (
    <div className={`${waitingForPeer ? 'low-opacity' : ''}`}>
      <p className="your-character-text">Your character: </p>
      <input className={`choose-char ${waitingForPeer ? 'not-clickable' : ''}`} value={chat.you} placeholder="Ex: scientist" maxLength="30" 
      disabled={waitingForPeer} onChange={e => setChat({...chat, you: e.target.value})}/>
    </div>
  )
}

export default ChooseCharacterDiv