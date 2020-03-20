import React from 'react'
import './common/common.css'

const AboutPage = () => {
  const aboutDisclaimer = {
    marginTop: '50px',
    fontSize: '15px'
  }

  return (
    <>
      <section className='page-wrapper'>
        <h1 className='page-title'>About</h1>
        <div className='common-center'>
          <p>
            4ScoreChat was started by a man from New York who is a fan of getting out of his comfort zone. He took
            improv classes at New York's Magnet Theater and also did public speaking at the New York Toastmasters Club.
            However, when life got busy, he wanted a way to improv and storytell from the comfort of his home. And so
            4ScoreChat was born.
          </p>

          <p>
            Our mission is to build a community that fosters imagination, self-improvement, and spontaneous improv.
            Though we don't enforce it, we request all chats on our site stay somewhat clean and family-friendly.
          </p>

          <p>
            If you have suggestions or ideas for improvement, then let us know. Also, we are based out of New York City
            and are looking for help with marketing and engineering (our tech stack is React/NodeJs). If you'd like to
            join our team, then send us an email explaining what value you can provide.
          </p>

          <p>
            <b>Contact: </b>Our email is <a href='mailto:4ScoreChat@gmail.com'>4ScoreChat@gmail.com</a>
          </p>

          <p style={aboutDisclaimer}>
            Disclaimer: By using our site you agree to have fun, entertaining improv chats. You also acknowledge you can
            end a chat at any time and agree to not hold us responsible for any claims made during chats.
          </p>
        </div>
      </section>
      <div className='empty-space-on-bottom'></div>
    </>
  )
}

export default AboutPage
