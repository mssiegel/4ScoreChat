import React from "react"
import './common.css'

const AboutPage = () => {

  const aboutDisclaimer = {
    marginTop: '50px',
    fontSize: '15px'
  }

  return (
    <>
    <section className='page-wrapper'>
      <h1 className='title-style'>About</h1>
      <div className='common-center'>
        <p>Pick your nose, fart out loud, eat your boogers, whatever, its all okay. Here, you can become whomever you want. Just choose a character and start chatting. Though we don't enforce it, we request all chats stay somewhat clean and family-friendly.</p>
        <p>Each conversation is a chance to deeply connect with your fellow human. It's about getting in the flow, feeding off one another, and telling a story. Chat long enough and you may notice your imagination and eagerness improving.</p>
        <p>You may experience some side effects though. People who use this site report feeling more empowered outside in the real-world. They say their friends tell them they're more exciting, more empathetic, and have neat imaginations. So now it is your turn. Go ahead and enter our chatroom.</p>
        <p><b>Contact: </b>Reach out to us by email at <a href="mailto:4ScoreChat@gmail.com">4ScoreChat@gmail.com</a></p>
        <p style={aboutDisclaimer}>Disclaimer: By using our site you agree to have fun, entertaining improv chats. You also acknowledge you can end a chat at any time and agree to not hold us responsible for any claims made during chats.</p>
      </div>
    </section>
    <div className="empty-space-on-bottom"></div>
    </>
  )
}

export default AboutPage