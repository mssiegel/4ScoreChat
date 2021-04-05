import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

import './PrivateRoom.css'
import './ExampleImprovsPage.css'
import PrivateChatbox from './privateRoom/PrivateChatbox'

// move copyToClipboard() into component prior to git committing
function copyToClipboard() {
  const el = document.createElement('textarea')
  document.body.appendChild(el)
  el.value = window.location.href
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

const socket = io(process.env.SERVER_URL + '/private')

const PrivateRoom = ({ roomId }) => {
  socket.connect()
  // disconnects socket when user leaves Private Room
  useEffect(() => () => socket.disconnect(), [])

  const [chat, setChat] = useState({ you: '', conversation: [] })
  const [realChat, setRealChat] = useState({ you: '', conversation: [] })

  return (
    <section className='white'>
      <h1 className='page-title white'>Private Room</h1>
      <p className='center-text'>
        To invite your friend(s) to this room, send them the link.{' '}
        <button className='btn copy-link' onClick={copyToClipboard}>
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

export default PrivateRoom
