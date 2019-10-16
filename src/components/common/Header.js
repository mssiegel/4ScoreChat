import React from "react"
import { Link } from "gatsby"
import logo from "../../images/wizard-hat.jpg"
import "./Header.css"


const Header = () => (
  <>
  <header>
    <div className="nav-container">
      <h1 className="nav-title">
        <Link to="/" className="nav-title-link">
          <img id="nav-wizard-hat" src={logo} alt="4ScoreChat's logo"/>4Score Chat 
        </Link>
      </h1>     

      <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
      <nav>
        <ul>
          <li><Link to="/example-improvs/">Example Improvs</Link></li>
          <li><Link to="/improv-tips/">Improv Tips</Link></li>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/chatroom/">Chatroom</Link></li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className='nav-toggle-label'>
        <span></span>
      </label>
    </div>
  </header>
  <div id="spacing-below-navbar"></div>
  </>
)

export default Header