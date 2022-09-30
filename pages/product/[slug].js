import React from 'react';
import { client, urlFor } from '../../lib/client';

const ProductDetails = () => {
    return (
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src='' />
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {

    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { products, bannerData }
    }
  }

export default ProductDetails