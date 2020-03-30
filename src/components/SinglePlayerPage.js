import React, { useState, useRef, useEffect } from 'react'
import Fab from '@material-ui/core/Fab'
import SendIcon from '@material-ui/icons/Send'
import './SinglePlayerPage.css'

const SinglePlayerPage = () => {
  useEffect(() => {
    messageInput.current.focus()
    localStorage['saved chat'] = JSON.stringify(improvChat)
  })

  const initialChat = [['peer', 'Intro', 'Create your own conversations. Press "Tab" to quickly switch characters']]
  const savedChat = localStorage['saved chat'] && JSON.parse(localStorage['saved chat'])

  const [improvChat, setImprovChat] = useState(savedChat || initialChat)
  const [player1, setPlayer1] = useState('Person 1')
  const [player2, setPlayer2] = useState('Person 2')
  const [curPlayer, setCurPlayer] = useState(1)
  const [editingUsernames, setEditingUsernames] = useState(false)
  const [message, setMessage] = useState('')
  const backgroundColor = { background: '#f8e5e0' }
  console.log(editingUsernames)

  const messageInput = useRef(null)

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
    if (e.key === 'Tab') switchPlayers()
  }

  return (
    <>
      <div>
        <h1 className='page-title' style={{ color: 'white' }}>
          Single Player
        </h1>
        <div className='reset-chat-container'>
          <button className='btn reset-chat' onClick={() => setImprovChat(initialChat)}>
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
                        onChange={e => setPlayer1(e.target.value)}
                      />
                      <input
                        className='username player2'
                        value={player2}
                        placeholder='Your Character'
                        maxLength='20'
                        onChange={e => setPlayer2(e.target.value)}
                      />
                      <span className='edit-names' onClick={() => setEditingUsernames(false)}>
                        Done Editing
                      </span>
                    </>
                  ) : (
                    <>
                      <span className={`${curPlayer === 1 ? 'player1' : 'non-active-player'}`} onClick={switchPlayers}>
                        {player1}
                      </span>
                      <span className='edit-names' onClick={() => setEditingUsernames(true)}>
                        Edit
                      </span>
                      <span className={`${curPlayer === 2 ? 'player2' : 'non-active-player'}`} onClick={switchPlayers}>
                        {player2}
                      </span>
                    </>
                  )}
                </div>
                <input
                  className={`message ${curPlayer === 1 ? '' : 'message2'}`}
                  value={message}
                  placeholder='Say something'
                  maxLength='75'
                  onKeyDown={e => switchIfTabPressed(e)}
                  onChange={e => setMessage(e.target.value)}
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
