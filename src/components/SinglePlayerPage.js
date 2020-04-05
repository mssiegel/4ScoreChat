import React, { useState, useRef, useEffect } from 'react'
import Fab from '@material-ui/core/Fab'
import SendIcon from '@material-ui/icons/Send'
import './SinglePlayerPage.css'

const SinglePlayerPage = () => {
  const initialChat = [
    [
      'peer',
      'Tips',
      'Info is saved even if you reload the page. Press "Tab" to quickly switch people on a large keyboard.',
    ],
    ['peer', '', ''],
  ]

  let savedChat, savedPlayer1, savedPlayer2
  if (typeof window !== 'undefined') {
    savedChat = localStorage['saved chat'] && JSON.parse(localStorage['saved chat'])
    savedPlayer1 = localStorage['player1'] && JSON.parse(localStorage['player1'])
    savedPlayer2 = localStorage['player2'] && JSON.parse(localStorage['player2'])
  }

  const [improvChat, setImprovChat] = useState(savedChat || initialChat)
  const [player1, setPlayer1] = useState(savedPlayer1 || 'Person 1')
  const [player2, setPlayer2] = useState(savedPlayer2 || 'Person 2')

  const [curPlayer, setCurPlayer] = useState(1)
  const [editingUsernames, setEditingUsernames] = useState(false)
  const [message, setMessage] = useState('')
  const backgroundColor = { background: '#f8e5e0' }

  const messageInput = useRef(null)

  useEffect(() => {
    localStorage['saved chat'] = JSON.stringify(improvChat)
    localStorage['player1'] = JSON.stringify(player1)
    localStorage['player2'] = JSON.stringify(player2)
  }, [improvChat, player1, player2])

  useEffect(() => {
    messageInput.current.focus()
  })

  function sendMessage(e) {
    e.preventDefault()
    if (message) {
      setMessage('')
      const chatAddition = curPlayer === 1 ? ['you', player1, message] : ['peer', player2, message]
      setImprovChat([...improvChat, chatAddition])
      scrollToBottomOfChat()
    }
  }

  function switchPlayers() {
    setCurPlayer(curPlayer === 1 ? 2 : 1)
    messageInput.current.focus()
  }

  function scrollToBottomOfChat() {
    messageInput.current.scrollIntoView({ behavior: 'smooth' })
  }

  function switchIfTabPressed(e) {
    if (e.key === 'Tab') {
      //preventDefault prevents safari quirk that focuses browser address bar upon pressing tab
      e.preventDefault()
      switchPlayers()
    }
  }

  function resetChat() {
    setImprovChat(initialChat)
    setPlayer1('Person 1')
    setPlayer2('Person 2')
  }

  return (
    <>
      <div>
        <h1 className='page-title' style={{ color: 'white' }}>
          Single Player
        </h1>
        <div className='reset-chat-container'>
          <button className='btn reset-chat' onClick={resetChat}>
            Reset chat
          </button>
        </div>
        <div className='center-chatbox'>
          <div className='chat-container'>
            <div className='chatbox' style={backgroundColor}>
              <div className='chatbox-text-wrapper'>
                {improvChat.map(([person, character, message], i) => (
                  <p key={i}>
                    <span className={person}>{character}: </span>
                    <span className='chat-text'>{message}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className='chatbox-bottom' style={backgroundColor}>
              <form onSubmit={sendMessage} className='send-message-form'>
                <div className={`character-names`}>
                  {editingUsernames ? (
                    <>
                      <input
                        className='username'
                        value={player1}
                        placeholder='Your Character'
                        maxLength='20'
                        onChange={(e) => setPlayer1(e.target.value)}
                      />
                      <input
                        className='username red-font'
                        value={player2}
                        placeholder='Your Character'
                        maxLength='20'
                        onChange={(e) => setPlayer2(e.target.value)}
                      />
                      <button className='edit-names' onClick={() => setEditingUsernames(false)} type='button'>
                        Done Editing
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className={`${curPlayer === 1 ? 'player1' : 'non-active-player'}`}
                        onClick={curPlayer === 1 ? null : switchPlayers}
                        type='button'
                      >
                        {player1}
                      </button>
                      <button className='edit-names' onClick={() => setEditingUsernames(true)} type='button'>
                        Edit
                      </button>
                      <button
                        className={`${curPlayer === 2 ? 'player2' : 'non-active-player'}`}
                        onClick={curPlayer === 2 ? null : switchPlayers}
                        type='button'
                      >
                        {player2}
                      </button>
                    </>
                  )}
                </div>
                <input
                  className={`message ${curPlayer === 1 ? '' : 'message2'}`}
                  value={message}
                  placeholder='Say something'
                  maxLength='75'
                  onKeyDown={(e) => switchIfTabPressed(e)}
                  onChange={(e) => setMessage(e.target.value)}
                  ref={messageInput}
                  disabled={editingUsernames}
                />
                <Fab
                  size='small'
                  type='submit'
                  color='secondary'
                  style={{ marginLeft: '10px', background: curPlayer === 1 ? '#0070ff' : 'red' }}
                >
                  <SendIcon />
                </Fab>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePlayerPage
