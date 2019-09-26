import React from "react"
import "./listItems.css"
import PaletteIcon from '@material-ui/icons/Palette'
import SecurityIcon from '@material-ui/icons/Security'
import ChildCareIcon from '@material-ui/icons/ChildCare';

const ListItems = ({chat}) => {  
  return (
    <>
      <div className="list-item">
        <div className="flex">
          <PaletteIcon/><h3 className="list-subtitle">Creativity</h3>
        </div>
        <p className="list-text">Open your heart. Get in character. And have fun chatting!</p>
      </div>

      <div className="list-item">
        <div className="flex">
          <ChildCareIcon/><h3 className="list-subtitle">Family Friendly</h3>
        </div>
        <p className="list-text">That's how we roll. But, hot dang, we don't have any filters. So, uh, no guarantees.</p>
      </div>

      <div className="final-list-item">
        <div className="flex">
          <SecurityIcon/><h3 className="list-subtitle">Anonymous</h3>
        </div>
        <p className="list-text">All chats are anonymous. Be as silly as you'd like. No one will judge you.</p>
      </div>
    </>
  )
}

export default ListItems