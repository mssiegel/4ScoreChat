import React from 'react'
import { Link } from 'gatsby'

const EmailSignup = () => {
  const signupForm = {
    background: 'white',
    fontFamily: 'Helvetica,Arial,sans-serif',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '8px',
    paddingRight: '8px',
    marginBottom: '35px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '5px'
  }

  const largeFont = {
    fontSize: '21px'
  }

  const mediumFont = {
    fontSize: '17px'
  }

  const formNoBottomMargin = {
    marginBottom: '7px'
  }

  const fakeInput = {
    position: 'absolute',
    left: '-5000px'
  }

  const submitButton = {
    ...largeFont,
    background: '#87002A'
  }

  return (
    <>
      <link href='//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css' rel='stylesheet' type='text/css' />
      <div id='mc_embed_signup' style={signupForm}>
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
            <label htmlFor='mce-EMAIL' style={largeFont}>
              Sign up to get notified when we release new features
            </label>
            <input
              type='email'
              defaultValue=''
              name='EMAIL'
              className='email'
              id='mce-EMAIL'
              placeholder='email address'
              required
              style={mediumFont}
            />
            {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
            <div style={fakeInput} aria-hidden='true'>
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
