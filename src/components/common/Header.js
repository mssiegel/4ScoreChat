import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/wizard-hat.jpg'
import './Header.css'

const Header = () => (
  <>
    <header>
      <div className='nav-container'>
        <h1 className='nav-title'>
          <Link to='/' className='nav-title-link'>
            <img id='nav-wizard-hat' src={logo} alt="4ScoreChat's logo" />
            4ScoreChat
          </Link>
        </h1>

        <input type='checkbox' id='nav-toggle' className='nav-toggle' />
        <nav>
          <ul>
            <li>
              <Link to='/chatroom/'>Chatroom</Link>
            </li>
            <li>
              <Link to='/single-player'>Single Player</Link>
            </li>
            <li>
              <Link to='/example-improvs/'>Examples</Link>
            </li>
            <li>
              <Link to='/improv-tips/'>Tips</Link>
            </li>
            <li>
              <Link to='/about/'>About</Link>
            </li>
          </ul>
        </nav>
        <label htmlFor='nav-toggle' className='nav-toggle-label'>
          <span></span>
        </label>
      </div>
    </header>
    <div id='spacing-below-navbar'></div>
  </>
)

export default Header
