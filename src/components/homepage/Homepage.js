import React from 'react'
import { Link } from 'gatsby'
import './Homepage.css'
import heroBoy from '../../images/hero-boy.png'
import SampleChatbox from '../chatbox/SampleChatbox'
import ListItems from './ListItems'

const firstChat = {
  title: 'Be anyone',
  titleColor: 'black',
  you: 'Farmer',
  peer: 'Pancake flipping pirate',
  conversation: [
    ['you', 'Farmer', 'Im gonna become a pirate'],
    ['you', 'Farmer', 'and join your ship'],
    ['you', 'Farmer', 'i love pancakes'],
    ['peer', 'Pancake flipping pirate', 'Welcome aboard'],
    ['peer', 'Pancake flipping pirate', 'you can call me Captain Breakfast'],
  ],
}

const realChat = [
  ['you', 'Real You', 'haha i really like your character'],
  ['you', 'Real You', 'im a massive fan of pirate movies'],
  ['peer', 'Your Peer', 'lol thanks'],
  ['peer', 'Your Peer', 'yeah i like Pirates of the Caribbean'],
  ['peer', 'Your Peer', 'you ever see that?'],
]

const secondChat = {
  title: 'Switch to your real self',
  titleColor: 'black',
}

const HomePage = () => {
  return (
    <>
      <section id='first-page' className='grid vertical-align'>
        <div></div>
        <div className='intro'>
          <h1 id='intro-title'>Instant Improv</h1>
          <h2 id='intro-subtitle'>Make new friends {'&'} chat away</h2>
          <div>
            <img className='visit-chatroom-image' src={heroBoy} alt='Costumed boy hero' />
          </div>
          <Link to='/chatroom/'>
            <button className='visit-chatroom-button btn'>Pick your character</button>
          </Link>
          <p id='homepage-tip'>
            Most popular time is <span className='homepage-tip-best-time'>Sunday 8:00pm EST</span>
          </p>
        </div>
        <div></div>
        <ListItems />
        <div></div>
      </section>

      <section id='second-page' className='grid'>
        <div></div>
        <SampleChatbox chat={firstChat} />
        <div></div>
        <SampleChatbox chat={secondChat} improvMode={false} realChat={realChat} />
        <div></div>
      </section>
      <div id='home-footer'>
        <h2 className='call-to-action'>Who will you be?</h2>
        <Link to='/chatroom/'>
          <button className='visit-chatroom-button btn'>Pick your character</button>
        </Link>
        <p className='disclaimer'>
          By using 4ScoreChat, you acknowledge this is the internet and agree not to hold us responsible for anything
          said, no matter how gooey or yucky.
        </p>
      </div>
    </>
  )
}

export default HomePage
