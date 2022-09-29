import React from 'react';

import HeroBanner from '../components/HeroBanner';

const Home = () => {
  return (
    <div>

      <HeroBanner />
      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>


    </div>
  )
}

export default Home;




