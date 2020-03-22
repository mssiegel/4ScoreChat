import React, { useEffect } from 'react'
import './StickyButtons.css'

const StickyButtons = ({ endChat, chatEnded, improvMode, setImprovMode, scrollToBottomOfChat, unread, setUnread }) => {
  useEffect(() => scrollToBottomOfChat())

  function switchModes() {
    setImprovMode(!improvMode)
    setUnread(0)
  }

  return (
    <div className='sticky-chat-buttons'>
      <button className={`${improvMode ? 'real-chat' : 'improv-chat'} btn`} onClick={switchModes}>
        {improvMode ? 'Real' : 'Character'} chat {unread > 0 && <span className='notification'>{unread}</span>}
      </button>
      {!chatEnded && (
        <button className='end-chat btn' onClick={endChat}>
          End
        </button>
      )}
    </div>
  )
}

export default StickyButtons
