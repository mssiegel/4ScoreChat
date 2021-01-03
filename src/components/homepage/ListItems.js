import React from 'react'
import './ListItems.css'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import FilterVintageIcon from '@material-ui/icons/FilterVintage'
import FavoriteIcon from '@material-ui/icons/Favorite'

const ListItems = () => {
  return (
    <div className='list-item-container'>
      <div className='list-item'>
        <div className='flex-center'>
          <WhatshotIcon />
          <h3 className='list-subtitle'>Meet cool people</h3>
        </div>
        <p className='list-text'>Get matched with a random person from around the world.</p>
      </div>

      <div className='list-item'>
        <div className='flex-center'>
          <FilterVintageIcon />
          <h3 className='list-subtitle'>Family Friendly</h3>
        </div>
        <p className='list-text'>
          That's how we roll. But, hot dang, we don't have any filters. So, uh, no guarantees.
        </p>
      </div>

      <div className='list-item final-list-item'>
        <div className='flex-center'>
          <FavoriteIcon />
          <h3 className='list-subtitle'>Connect emotionally</h3>
        </div>
        <p className='list-text'>Be as open as you'd like. Talk as your character or as your real self.</p>
      </div>
    </div>
  )
}

export default ListItems
