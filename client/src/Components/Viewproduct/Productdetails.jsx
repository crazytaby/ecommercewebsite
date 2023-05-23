import React from 'react'
import './Productdetails.css'
import Productproperties from './Productproperties'
const Productdetails = (props) => {
  return (
    <>
        <div class="product-details">
                    <div class="pd1">
                        <h1>Product Description</h1>
                        <div class="pd2">
                            <h4>Top-Details :</h4>
            
                        </div>
                    </div>
                    <Productproperties ram={props.ram} storage={props.storage} frontcamera={props.frontcamera} backcamera={props.backcamera} battery={props.battery} processor={props.processor} display={props.display}/>
                </div>
    </>
  )
}

export default Productdetails