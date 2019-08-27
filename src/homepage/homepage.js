import React from "react"
import { Link } from "gatsby"
import "./homepage.css"


const HomePage = () => (
    <div id="intro-container">
      <h1 id="intro-title">Instant Improv</h1>
      <h2 id="intro-subtitle">Connect with someone and chat away</h2>
      <button className="enter-chatroom-button">Enter Chatroom</button>

      <div className="sample-chat-container">
        <h2 className="sample-chat-subtitle">Be Anyone</h2>
        <div className="chatbox">
          <p className="peer-announcement">
            <span className="grey"><em>You matched with </em></span><span className="peer">Vampire Hunter</span>
          </p>
          <p><span className="peer">Vampire Hunter: </span><span className="chat-text">nice dagger you got</span></p>
          <p><span className="you">Toy Store Owner: </span><span className="chat-text">Thanks. It's made of strong plastic!</span></p>
          <p><span className="peer">Vampire Hunter: </span><span className="chat-text">hmmm, I challenge you to a duel</span></p>
          <p><span className="you">Toy Store Owner: </span><span className="chat-text">Okay, get ready to be crushed.</span></p>
          <p><span className="peer">Vampire Hunter: </span><span className="chat-text">haha, bring it on</span></p>
          <div className="chat-input-wrapper">
            <p className='username'>Toy Store Owner</p>
            <div className="chat-message-wrapper">
              <p className='message'>Smiley Emoji. Yo, I have skills that kills</p>
              <button className="send-message-button">Arrow</button>
            </div>
          </div>
        </div>
      </div>

  </div>
)

export default HomePage