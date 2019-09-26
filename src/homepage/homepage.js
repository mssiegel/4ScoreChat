import React, {useState} from "react"
import { Link } from "gatsby"
import "./homepage.css"
import Chatbox from './chatbox'
import ListItems from './listItems'

const firstChat = {
  title: 'Be Anyone',
  you: 'Toy Store Owner',
  peer: 'Vampire Hunter',
  conversation : [
    ['peer', 'Vampire Hunter', 'nice dagger you got'],
    ['you', 'Toy Store Owner', "Thanks. It's made of strong plastic."],
    ['you', 'Toy Store Owner', "hmmm, I challenge you to a duel"],
    ['peer', 'Vampire Hunter', 'Okay, get ready to be crushed.'],
    ['you', 'Toy Store Owner', "haha, bring it on"]
  ],
  message: 'Yo, I have skills that kills'
}

const secondChat = {
  title: 'Be Present',
  titleColor: 'black',
  you: 'Vampire Hunter',
  peer: 'Pizza Delivery Boy',
  conversation : [
    ['peer', 'Pizza Delivery Boy', 'ooooh'],
    ['peer', 'Pizza Delivery Boy', 'Can you sing me a song?'],
    ['you', 'Guitar Rockstar', "I'll sing for a smoking hot pizza"],
    ['peer', 'Pizza Delivery Boy', "Okay, here's a pizza."],
    ['peer', 'Pizza Delivery Boy', 'Fresh and hot.'],
    ['you', 'Guitar Rockstar', "Delicious!!"],
    ['you', 'Guitar Rockstar', "Let's sing the pizza song:"]
  ],
  message: 'oh, pizza, pizza, fill up my mouth...'
}

const HomePage = () => {

  const [chat1, setChat1] = useState(firstChat)
  const [chat2, setChat2] = useState(secondChat)

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
        </div>
        <div></div>
      <Chatbox chat={chat1} setChat={setChat1}/>
      <div></div>
    </section>
    <section id="second-page" className="grid">
      <div></div>
      <div className="list-items-container">
        <ListItems />
      </div>
      <div></div>
      <Chatbox chat={chat2} setChat={setChat2}/>
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