import React from 'react'
import '../chatbox/StickyButtons.css'

const PrivateStickyButtons = ({ improvMode, setImprovMode, unread, setUnread }) => {
  function switchModes() {
    setImprovMode(!improvMode)
    setUnread(0)
  }

  return (
    <div className='sticky-chat-buttons'>
      <button className={`${improvMode ? 'real-chat' : 'improv-chat'} btn`} onClick={switchModes}>
        {improvMode ? 'Real' : 'Character'} chat {unread > 0 && <span className='notification'>{unread}</span>}
      </button>
    </div>
  )
}

export default PrivateStickyButtons
