import React from 'react'
import './common/common.css'

const ContactPage = () => {
  const disclaimer = {
    marginTop: '50px',
    fontSize: '15px',
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
            React/NodeJs).
          </p>

          <p>
            <b>Contact: </b>Our email is <a href='mailto:4ScoreChat@gmail.com'>4ScoreChat@gmail.com</a>
          </p>

          <p style={disclaimer}>
            By using our site you agree to have fun, entertaining improv conversations. You also acknowledge you can
            leave anytime and agree to not hold us responsible for anything said during your chats.
          </p>
        </div>
      </section>
      <div className='empty-space-on-bottom'></div>
    </>
  )
}

export default ContactPage
