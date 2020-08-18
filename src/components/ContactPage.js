import React from 'react'
import './common/common.css'
import EmailSignup from './common/EmailSignup'

const ContactPage = () => {
  const contactEmail = {
    fontSize: '24px',
  }

  return (
    <>
      <h1 className='page-title white'>Contact</h1>
      <section className='page-wrapper real-chat-background'>
        <div className='common-center'>
          <p>
            A guy from New York started 4ScoreChat to meet new people, chat, and have fun. By taking improv classes at
            UCB Theatre and doing public speaking at the New York Toastmasters club, the dude became involved in
            communities that let him be his creative self. An entrepreneur at heart, he created 4ScoreChat to go on
            crazy improv adventures at the click of a button.
          </p>

          <p>
            Our mission is to build a community that fosters imagination, friendships, and a love for improv. We are
            based out of New York City and are looking for help with marketing and engineering (our tech stack is
            React/NodeJs). Remote collaboration works too.
          </p>

          <p style={contactEmail}>
            <b>Contact: </b>Our email is <a href='mailto:4ScoreChat@gmail.com'>4ScoreChat@gmail.com</a>
          </p>
          <br />
          <EmailSignup />
        </div>
      </section>
    </>
  )
}

export default ContactPage
