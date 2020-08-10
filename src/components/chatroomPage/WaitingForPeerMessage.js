import React, { useState, useEffect } from 'react'
import './WaitingForPeerMessage.css'

const WaitingForPeerMessage = ({ cancelSearch }) => {
  const [timer, setTimer] = useState(0)
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    return () => clearInterval(timerInterval)
  }, [])

  const waitingMessages = [
    'Looking for someone 🧐',
    'Casting a searching spell 🧙🏽',
    'Requesting a funny fellow 🥳',
    'Examining for clues 🔍',
    'Sniffing for an improv pal 🐶',
    'Calling in backup searchers 🗣',
    'Whoops! My computer brain went 💩',
    'Ahhhhhhhhh, noooooooooo 🙀',
  ]

  const timeToShowNoUsers = 30

  function getWaitingMessage() {
    const intervalBetweenMessages = timeToShowNoUsers / (waitingMessages.length - 1)
    const potentialWaitingI = Math.floor(timer / intervalBetweenMessages)
    const waitingI = Math.min(potentialWaitingI, waitingMessages.length - 1)
    return waitingMessages[waitingI]
  }

  function renderTimer(timer) {
    if (timer >= 3600) return '59:59'

    let minutes = Math.floor(timer / 60).toString()
    let seconds = Math.floor(timer % 60).toString()

    if (minutes.length === 1) minutes = '0' + minutes
    if (seconds.length === 1) seconds = '0' + seconds

    return `${minutes} : ${seconds}`
  }

  return (
    <div className='waiting-for-peer'>
      <p className='waiting-title'>{getWaitingMessage()}</p>
      <p className='timer'>{renderTimer(timer)}</p>
      <button className='btn' id='cancel-chat-btn' onClick={cancelSearch}>
        Cancel
      </button>
      {timer >= timeToShowNoUsers && (
        <p className='waiting-note'>
          Looks like no other users are online now. Best chatting time is{' '}
          <span className='waiting-best-time'>Sunday 8:00pm EST</span>. Come then to get matched instantly!
        </p>
      )}
    </div>
  )
}

export default WaitingForPeerMessage
