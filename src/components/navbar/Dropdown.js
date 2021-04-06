import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import './Dropdown.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

const Dropdown = ({ title, links }) => {
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
        {title} <ArrowDropDownIcon />
      </div>
      {opened && (
        <div className='dropdown-content'>
          {links.map(({ link, text }, i) => (
            <Link to={link} key={i}>
              {text}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Dropdown
