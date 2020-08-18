import React from 'react'
import { Link } from 'gatsby'
import heroBoy from '../../images/hero-boy.png'

const EmailSignup = () => {
  const signupForm = {
    fontFamily: 'Helvetica,Arial,sans-serif',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '8px',
    paddingRight: '8px',
    marginBottom: '35px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '5px',
  }

  const signupText = {
    color: '#87002A',
    fontSize: '22px',
    textAlign: 'center',
    marginTop: '10px',
  }

  const emailInput = {
    fontSize: '18px',
    height: '40px',
  }

  const formNoBottomMargin = {
    marginBottom: '7px',
  }

  const fakeInput = {
    position: 'absolute',
    left: '-5000px',
  }

  const submitButton = {
    fontSize: '21px',
    background: '#87002A',
    height: '40px',
  }

  const emailSignupImage = {
    width: '250px',
    display: 'block',
    margin: 'auto',
  }

  return (
    <>
      <link href='//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css' rel='stylesheet' type='text/css' />
      <div id='mc_embed_signup' style={signupForm} class='email-signup-form'>
        <form
          action='https://4scorechat.us19.list-manage.com/subscribe/post?u=862b467d49bd233e9d3f4bab2&amp;id=54efc95efc'
          method='post'
          id='mc-embedded-subscribe-form'
          name='mc-embedded-subscribe-form'
          className='validate'
          target='_blank'
          noValidate
          style={formNoBottomMargin}
        >
          <div id='mc_embed_signup_scroll'>
            <label htmlFor='mce-EMAIL' style={signupText}>
              Subscribe to our 4ScoreChat email list
            </label>
            <img src={heroBoy} style={emailSignupImage} alt='Costumed boy hero' />
            <input
              type='email'
              defaultValue=''
              name='EMAIL'
              className='email'
              id='mce-EMAIL'
              placeholder='email address'
              required
              style={emailInput}
            />
            <div style={fakeInput} aria-hidden='true'>
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input type='text' name='b_862b467d49bd233e9d3f4bab2_54efc95efc' tabIndex='-1' defaultValue='' />
            </div>
            <div className='clear'>
              <input
                type='submit'
                style={submitButton}
                defaultValue='Subscribe'
                name='subscribe'
                id='mc-embedded-subscribe'
                className='button'
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default EmailSignup
