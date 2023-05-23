import React from 'react'
import './Productcard.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Cartproductcard = (props) => {
    const category=props.category;
    const id = props.id;

    async function deleteCartData (){
        try {
           await axios.post("http://localhost:8000/deleteCartData",{"id":props.id,"productname":props.productname});
        } catch (error) {
            console.log(error);
        }
    }

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
                        <Link to="/buy" >
                        <button className="productcard-add-to-cart-btn" >Buy Now</button>
                        </Link>
                    </div>
                        <button className="productcard-add-to-cart-btn" onClick={deleteCartData}>Delete</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Cartproductcard