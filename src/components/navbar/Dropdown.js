import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import './Dropdown.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

const Dropdown = () => {
  useEffect(() => {
    document.addEventListener('click', closeDropdown)
    return () => document.removeEventListener('click', closeDropdown)
  })

  const closeDropdown = () => {
    if (opened) setOpened(false)
  }

  const [opened, setOpened] = useState(false)

  return (
    <>
      <div className='dropdown' onClick={() => setOpened(!opened)}>
        More Info <ArrowDropDownIcon />
      </div>
      {opened && (
        <div className='dropdown-content'>
          <Link to='/example-improvs'>Examples</Link>
          <Link to='/improv-tips'>Tips</Link>
          <Link to='/single-player'>Single Player</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      )}
    </>
  )
}

export default Dropdown
