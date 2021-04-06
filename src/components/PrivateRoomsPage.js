import React from 'react'
import { navigate } from 'gatsby'
import { customAlphabet } from 'nanoid'

import './common/common.css'

const PrivateRoomsPage = () => {
  function createPrivateRoom() {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const nanoid = customAlphabet(alphabet, 6)
    const roomId = nanoid()
    navigate(`/private-rooms/${roomId}`)
  }

  return (
    <>
      <h1 className='page-title white'>Private Rooms</h1>
      <section className='page-wrapper real-chat-background'>
        <div className='common-center'>
          <p className='center-text'>Create a private room. Only those you invite will be able to join.</p>
          <div className='flex-center'>
            <button className='visit-chatroom-button btn' onClick={createPrivateRoom}>
              Create private room
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivateRoomsPage
