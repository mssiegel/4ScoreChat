import React from 'react'
import './WaitingForPeerMessage.css'

const WaitingForPeerMessage = ({ cancelSearch }) => {
  return (
    <div className='waiting-for-peer'>
      <p className='waiting-title'>Looking for someone...</p>
      <button className='btn' id='cancel-chat-btn' onClick={cancelSearch}>
        Cancel
      </button>
      <p className='waiting-note'>
        Best chatting time is <span className='waiting-best-time'>Sunday 8:00pm EST</span>. Come then to get matched
        instantly!
      </p>
    </div>
  )
}

export default WaitingForPeerMessage
