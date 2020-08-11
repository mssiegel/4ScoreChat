import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/wizard-hat.jpg'
import './Header.css'
import Dropdown from './Dropdown'

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
              <a target='_blank' href='https://discord.gg/hXvatgM'>
                Discord
              </a>
            </li>
            <li>
              <Dropdown />
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
