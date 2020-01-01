import React from "react"
import { Link } from "gatsby"

const EmailSignup = () => {
  const signupForm = {
    background: 'white',
    fontFamily: 'Helvetica,Arial,sans-serif',
    display: 'flex',
    justifyContent: 'center'
  }
  
  const noBottomMargin = {
    marginBottom: '0'
  }

  const fakeInput = {
    position: 'absolute',
    left: '-5000px'
  }

  return (
    <>
      <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css"/>
      <div id="mc_embed_signup" style={signupForm}>
      <form action="https://4scorechat.us19.list-manage.com/subscribe/post?u=862b467d49bd233e9d3f4bab2&amp;id=54efc95efc" 
       method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate
       style={noBottomMargin}>
          <div id="mc_embed_signup_scroll">
        <label htmlFor="mce-EMAIL">Get notified about 4Score news and events</label>
        <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required/>
          {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
          <div style={fakeInput}
           aria-hidden="true"><input type="text" name="b_862b467d49bd233e9d3f4bab2_54efc95efc" tabIndex="-1" defaultValue=""/></div>
          <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
          </div>
      </form>
      </div>

    </>
  )
}

export default EmailSignup