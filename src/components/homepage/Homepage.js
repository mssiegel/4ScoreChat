import React from "react"
import { Link } from "gatsby"
import "./Homepage.css"
import Chatbox from '../chatbox/Chatbox'
import ListItems from './ListItems'
import EmailSignup from './EmailSignup'

const firstChat = {
  title: 'Be Anyone',
  you: 'Toy store owner',
  peer: 'Vampire hunter',
  conversation : [
    ['peer', 'Vampire hunter', 'nice dagger you got'],
    ['you', 'Toy store owner', "thanks. It's made of strong plastic."],
    ['peer', 'Vampire hunter', "hmmm, I challenge you to a duel"],
    ['you', 'Toy store owner', "haha bring it on bub"],
    ['peer', 'Vampire hunter', "with pleasure"]
  ]
}

const secondChat = {
  title: 'Be Present',
  titleColor: 'black',
  you: 'Pizza delivery boy',
  peer: 'Guitar rockstar',
  conversation : [
    ['you', 'Pizza delivery boy', 'hello Guitar rockstar'],
    ['you', 'Pizza delivery boy', 'Can you sing me a song?'],
    ['peer', 'Guitar rockstar', "I'll sing for a smoking hot pizza"],
    ['you', 'Pizza delivery boy', "Okay, here's your pizza."],
    ['peer', 'Guitar rockstar', "Gee thanks!"],
    ['peer', 'Guitar rockstar', "I'll sing the pizza song!"],
    ['you', 'Pizza delivery boy', "THANKS! I LOVE THE PIZZA SONG!"]
  ]
}

const HomePage = () => {

  return (
    <>
    <section id="first-page" className="grid">
        <div></div>
        <div className="intro">
          <h1 id="intro-title">Instant Improv</h1>
          <h2 id="intro-subtitle">Connect and chat away</h2>
          <Link to="/chatroom/">
            <button className="enter-chatroom-button btn">Enter Chatroom</button>
          </Link>
          <p id="homepage-tip">Most popular time is <span className="homepage-tip-best-time">Sunday 8:00pm EST</span></p>
        </div>
        <div></div>
      <Chatbox chat={firstChat}/>
      <div></div>
    </section>

    <EmailSignup />

    <section id="second-page" className="grid">
      <div></div>
      <div className="list-items-container">
        <ListItems />
      </div>
      <div></div>
      <Chatbox chat={secondChat}/>
      <div></div>
    </section>
    <div id="home-footer">
      <h2 className="call-to-action">Who will you be?</h2>
      <Link to="/chatroom/">
        <button className="enter-chatroom-button btn">Enter Chatroom</button>
      </Link>
    </div>
    </>
  )
}

export default HomePage