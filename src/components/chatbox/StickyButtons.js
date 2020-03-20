import React from 'react'
import './StickyButtons.css'

const StickyButtons = ({ endChat }) => (
  <div className='sticky-chat-buttons'>
    <button className='end-chat btn' onClick={endChat}>
      End
    </button>
  </div>
)

export default StickyButtons
