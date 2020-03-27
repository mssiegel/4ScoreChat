import React from 'react'
import { Link } from 'gatsby'
import './Homepage.css'
import heroBoy from '../../images/hero-boy.png'
import SampleChatbox from '../chatbox/SampleChatbox'
import ListItems from './ListItems'
import EmailSignup from './EmailSignup'

const firstChat = {
  title: 'Enter as anyone',
  titleColor: 'black',
  you: 'Toy store owner',
  peer: 'Vampire hunter',
  conversation: [
    ['peer', 'Vampire hunter', 'these swords u sell are quite good'],
    ['you', 'Toy store owner', 'thanks.'],
    ['you', 'Toy store owner', 'they are perfect for ages 3 and up.'],
    ['peer', 'Vampire hunter', 'hmmm, i fit that age range'],
    ['peer', 'Vampire hunter', 'i am gonna get one']
  ]
}

const realChat = [
  ['you', 'Real You', 'Hi. How are u doing?'],
  ['peer', 'Your Peer', 'So busy lol.'],
  ['peer', 'Your Peer', 'It has been a wild day for me'],
  ['you', 'Real You', 'Oh. how come'],
  ['peer', 'Your Peer', 'I had a calculus test in school'],
  ['peer', 'Your Peer', 'it was super hard']
]

const secondChat = {
  title: 'Switch to your real self anytime',
  titleColor: 'black'
  /*you: 'Pizza delivery boy',
  peer: 'Guitar rockstar',
  conversation: [
    ['you', 'Pizza delivery boy', 'hello Guitar rockstar'],
    ['you', 'Pizza delivery boy', 'Can you sing me a song?'],
    ['peer', 'Guitar rockstar', "I'll sing for a smoking hot pizza"],
    ['you', 'Pizza delivery boy', "Okay, here's your pizza."],
    ['peer', 'Guitar rockstar', 'Gee thanks!'],
    ['peer', 'Guitar rockstar', 'Oh pizza you taste so gooooood'],
    ['you', 'Pizza delivery boy', "Oh pizza you're my favorite fooooood"]
  ]*/
}

const HomePage = () => {
  const subtitleStyle = {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'normal',
    marginBottom: '12px',
    letterSpacing: '0.5px'
  }

  return (
    <>
      <section id='first-page' className='grid vertical-align'>
        <div></div>
        <div className='intro'>
          <h1 id='intro-title'>Instant Improv</h1>
          <h2 id='intro-subtitle'>Connect and chat away</h2>
          <div>
            <img className='visit-chatroom-image' src={heroBoy} alt='Picture of costumed boy hero' />
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

      <EmailSignup />

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
      </div>
    </>
  )
}

export default HomePage
