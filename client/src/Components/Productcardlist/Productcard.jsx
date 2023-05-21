import React from 'react'
import './Productcard.css'
import {Link} from 'react-router-dom'

const Productcard = (props) => {
    const category=props.category.toLowerCase()+"s";
    const id = props.id;
    return (
        <> 
            <div className="col-lg-3 col-md-6 pb-lg-4 pb-2 d-flex justify-content-center">
            <div className="product-div">
                <div className="product-img">
                    <figure>
                        <img src={props.img} alt="" />
                    </figure>
                </div>
                <div className="product-info">
                    <h5 className="product-info-h5">{props.productname}</h5>
                    <div className="price">
                        <h6 className="product-price">{props.price}</h6>
                        <span className="product-red-price">{props.increasedprice}</span>
                    </div>
                </div>

                <div className="quantity-sect">
                    <div className="product-quantity">
                        <Link to={"/products/electronics/"+category+"/"+id} >
                        <button className="productcard-add-to-cart-btn" >viewproduct</button>
                        </Link>
                    </div>
                    <button className="productcard-add-to-cart-btn">Add to cart</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Productcard