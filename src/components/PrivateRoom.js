import React, { useState } from 'react'
import io from 'socket.io-client'

import './PrivateRoom.css'
import './ExampleImprovsPage.css'
import PrivateChatbox from './privateRoom/PrivateChatbox'

const socket = io('https://scorechat.herokuapp.com/private')
// const socket = io('http://localhost:4000/private')

const PrivateRoom = ({ roomId }) => {
  const [chat, setChat] = useState({ you: '', conversation: [] })
  const [realChat, setRealChat] = useState({ you: '', conversation: [] })

  return (
    <section className='white'>
      <h1 className='page-title white'>Private Room</h1>
      <p className='center-text'>
        To invite your friend(s) to this room, send them the link.{' '}
        <button className='btn copy-link' onClick={copyUrl}>
          Copy room link
        </button>
      </p>
      <div className='flex-center examples-padding-bottom'>
        <PrivateChatbox
          chat={chat}
          setChat={setChat}
          realChat={realChat}
          setRealChat={setRealChat}
          socket={socket}
          roomId={roomId}
        />
      </div>
    </section>
  )
}

function copyUrl() {
  // copies the page's url to clipboard
  const el = document.createElement('textarea')
  document.body.appendChild(el)
  el.value = window.location.href
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

export default PrivateRoom
