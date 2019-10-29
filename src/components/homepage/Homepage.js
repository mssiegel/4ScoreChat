import React, {useState} from "react"
import { Link } from "gatsby"
import "./Homepage.css"
import Chatbox from '../Chatbox'
import ListItems from './ListItems'

const firstChat = {
  title: 'Be Anyone',
  you: 'Toy Store Owner',
  peer: 'Vampire Hunter',
  conversation : [
    ['peer', 'Vampire Hunter', 'nice dagger you got'],
    ['you', 'Toy Store Owner', "Thanks. It's made of strong plastic."],
    ['you', 'Vampire Hunter', "I didn't know daggers came in plastic"],
    ['peer', 'Toy Store Owner', "Its a toy dagger"],
    ['peer', 'Toy Store Owner', "It comes in a set"],
    ['you', 'Vampire Hunter', "Oh, so incredible"],
    ['peer', 'Toy Store Owner', "Thanks. I've sold 30 of them so far today"],
    ['you', 'Vampire Hunter', "Make that 31. Give me one."]
  ],
  message: ''
}

const secondChat = {
  title: 'Be Present',
  titleColor: 'black',
  you: 'Guitar Rockstar',
  peer: 'Pizza Delivery Boy',
  conversation : [
    ['peer', 'Pizza Delivery Boy', 'ooooh'],
    ['peer', 'Pizza Delivery Boy', 'Can you sing me a song?'],
    ['you', 'Guitar Rockstar', "I'll sing for a smoking hot pizza"],
    ['peer', 'Pizza Delivery Boy', "Okay, here's a pizza."],
    ['peer', 'Pizza Delivery Boy', 'Fresh and hot.'],
    ['you', 'Guitar Rockstar', "Delicious!!"],
    ['you', 'Guitar Rockstar', "Let's sing the pizza song:"],
    ['you', 'Guitar Rockstar', "Oh pizza, pizza, fill up my mouth..."],
    ['peer', 'Pizza Delivery Boy', "pizza, pizza I LOVE YOU pizza!"],
  ],
  message: ''
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
      <Chatbox chat={chat1} setChat={setChat1} noBottom={true}/>
      <div></div>
    </section>
    <section id="second-page" className="grid">
      <div></div>
      <div className="list-items-container">
        <ListItems />
      </div>
      <div></div>
      <Chatbox chat={chat2} setChat={setChat2} noBottom={true}/>
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