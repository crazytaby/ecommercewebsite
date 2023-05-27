import React from 'react'
import './Productdetails.css'
import Productproperties from './Productproperties'
const Clothdetails = (props) => {
  return (
    <>
        <div class="product-details">
                    <div class="pd1">
                        <h1>Product Description</h1>
                        <div class="pd2">
                            <h4>Top-Details :</h4>
            
                        </div>
                    </div>
                    <Productproperties color={product.color} occasion={product.occasion} salespackage={product.salespackage} pattern={product.pattern} fabric={product.fabric} fabriccare={product.fabriccare}/>
                </div>
    </>
  )
}

export default Clothdetails