import React from "react"
import { Link } from "gatsby"
import "./Homepage.css"
import Chatbox from '../Chatbox'
import ListItems from './ListItems'
import EmailSignup from './EmailSignup'

const firstChat = {
  title: 'Be Anyone',
  you: 'Toy Store Owner',
  peer: 'Vampire Hunter',
  conversation : [
    ['peer', 'Vampire Hunter', 'nice dagger you got'],
    ['you', 'Toy Store Owner', "thanks. It's made of strong plastic."],
    ['peer', 'Vampire Hunter', "hmmm, I challenge you to a duel"],
    ['you', 'Toy Store Owner', "haha bring it on bub"],
    ['peer', 'Vampire Hunter', "with pleasure"]
  ]
}

const secondChat = {
  title: 'Be Present',
  titleColor: 'black',
  you: 'Pizza Delivery Boy',
  peer: 'Guitar Rockstar',
  conversation : [
    ['you', 'Pizza Delivery Boy', 'hello Guitar Rockstar'],
    ['you', 'Pizza Delivery Boy', 'Can you sing me a song?'],
    ['peer', 'Guitar Rockstar', "I'll sing for a smoking hot pizza"],
    ['you', 'Pizza Delivery Boy', "Okay, here's your pizza."],
    ['peer', 'Guitar Rockstar', "Gee thanks!"],
    ['peer', 'Guitar Rockstar', "I'll sing the pizza song!"],
    ['you', 'Pizza Delivery Boy', "THANKS! I LOVE THE PIZZA SONG!"]
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
      <Chatbox chat={firstChat} noBottom={true}/>
      <div></div>
    </section>

    <EmailSignup />

    <section id="second-page" className="grid">
      <div></div>
      <div className="list-items-container">
        <ListItems />
      </div>
      <div></div>
      <Chatbox chat={secondChat} noBottom={true}/>
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