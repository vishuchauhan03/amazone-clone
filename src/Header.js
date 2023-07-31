import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfYur5zlD1n-yu6wmYqqBAy1xrEDRg40WnEEfLRVVzCOMzHp60ORxtQoJPhzm_Nm1iQQ&usqp=CAU'/>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon'/>
      </div>
      <div className='header__nav'>
        <div className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>
        </div>
        <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
        </div>
        <div className='header__optionBasket'>
          <ShoppingBasketIcon />
          <span className='header__optionLineTwo header__basketCount'>0</span>
        </div> 
      </div>
    </div>
  )
}

export default Header
