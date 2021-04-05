import React from 'react'
import { navigate } from 'gatsby'

import './common/common.css'

const PrivateRoomsPage = () => {
  async function createPrivateRoom() {
    console.log('create Private Room clicked!')
    /*
    const roomUrl = await fetch(`${process.env.SERVER_URL}/private-rooms`, {
      method: 'POST',
    })
    */
    const roomUrl = 'axdg1gs7dxa'
    navigate(`/private-rooms/${roomUrl}`)
  }

  return (
    <>
      <h1 className='page-title white'>Private Rooms</h1>
      <section className='page-wrapper real-chat-background'>
        <div className='common-center'>
          <p className='center-text'>
            Create a private room for just you and your friend(s). Only those you invite will be able to join.
          </p>
          <div className='flex-center'>
            <button className='visit-chatroom-button btn' onClick={createPrivateRoom}>
              Create Private Room
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivateRoomsPage
