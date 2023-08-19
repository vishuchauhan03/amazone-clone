import React from 'react';
import "./Checkout.css"
import Subtotal from './Subtotal';
function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg'/>
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {/* basket item */}
          {/* basket item */}
          {/* basket item */}
          {/* basket item */}
        </div>
      </div>
      <div className='checkout__right'>
        <h2>the subtotal will go here</h2>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
