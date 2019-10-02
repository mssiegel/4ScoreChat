import React from "react"

const AboutPage = () => {
  const aboutPageWrapper = {
    background: '#F6F6FA',
    maxWidth: '94%',
    margin: 'auto',
    marginTop: '5px',
    paddingTop: '25px',
    paddingBottom: '25px'
    }

  const titleStyle = {
    fontSize: '40px',
    fontWeight: 'normal',
    textAlign: 'center',
  }

  const center = {
    maxWidth: '600px',
    margin: 'auto',
    paddingLeft: '25px',
    paddingRight: '25px'
  }

  const aboutParagraph = {
    ...center
  }

  const aboutDisclaimer = {
    ...center,
    marginTop: '50px',
    fontSize: '14px'
  }
  
  const emptyDiv = {
    height: '40px'
  }

  return (
    <>
    <section style={aboutPageWrapper}>
      <h1 style={titleStyle}>About</h1>
      <p style={aboutParagraph}>Pick your nose, fart out loud, eat your boogers, whatever, its all okay. Here, you can become whomever you want. Just choose a character and start chatting. Though we don't enforce it, we request all chats stay somewhat clean and family-friendly. <br/> <br/> 
      Each conversation is a chance to deeply connect with your fellow human. It's about getting in the flow, feeding off one another, and telling a story. Chat long enough and you may notice your imagination and eagerness improving. <br/> <br/>  
      You may experience some side effects though. People who use this site report feeling more empowered outside in the real-world. They say their friends tell them they're more exciting, more empathetic, and have neat imaginations. What can we say - we're all about mastery and deep connections.</p>
      <p style={aboutDisclaimer}>Disclaimer: By using our site you agree to have fun, entertaining improv chats. You also acknowledge you can end a chat at any time and agree to not hold us responsible for any claims made during chats. </p>
    </section>
    <div style={emptyDiv}></div>
    </>
  )
}

export default AboutPage