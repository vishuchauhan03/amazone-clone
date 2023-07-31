import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/07/23/amazon-prime-day-1129134-1658531701.jpg?itok=-aHaqsAi' />
        <div className='home__row'>
            <Product title='Following the best practices of successful companies is an excellent way to start creating your own magic formula to create satisfying product titles and descriptions.'  price={29.99} image="https://img.freepik.com/free-photo/business-owner-working-home-office-packaging_1150-11530.jpg?size=626&ext=jpg&ga=GA1.2.2136468895.1688206125&semt=ais" rating={5}/>
            <Product title='Following the best practices of successful companies is an excellent way to start creating your own magic formula to create satisfying product titles and descriptions.'  price={29.99} image="https://img.freepik.com/free-photo/business-owner-working-home-office-packaging_1150-11530.jpg?size=626&ext=jpg&ga=GA1.2.2136468895.1688206125&semt=ais" rating={5}/>
        </div>
        <div className='home__row'>
            <Product title='Following the best practices of successful companies is an excellent way to start creating your own magic formula to create satisfying product titles and descriptions.'  price={29.99} image="https://img.freepik.com/free-photo/business-owner-working-home-office-packaging_1150-11530.jpg?size=626&ext=jpg&ga=GA1.2.2136468895.1688206125&semt=ais" rating={5}/>
            <Product title='Following the best practices of successful companies is an excellent way to start creating your own magic formula to create satisfying product titles and descriptions.'  price={29.99} image="https://img.freepik.com/free-photo/business-owner-working-home-office-packaging_1150-11530.jpg?size=626&ext=jpg&ga=GA1.2.2136468895.1688206125&semt=ais" rating={5}/>
            <Product title='Following the best practices of successful companies is an excellent way to start creating your own magic formula to create satisfying product titles and descriptions.'  price={29.99} image="https://img.freepik.com/free-photo/business-owner-working-home-office-packaging_1150-11530.jpg?size=626&ext=jpg&ga=GA1.2.2136468895.1688206125&semt=ais" rating={5}/>
        </div>
        <div className='home__row'>
             <Product title='Following the best practices of successful companies is an excellent way to start creating your own magic formula to create satisfying product titles and descriptions.'  price={29.99} image="https://img.freepik.com/free-photo/business-owner-working-home-office-packaging_1150-11530.jpg?size=626&ext=jpg&ga=GA1.2.2136468895.1688206125&semt=ais" rating={5}/>
        </div>
      </div>
    </div>
  )
}

export default Home
