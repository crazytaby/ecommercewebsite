import React from 'react'
import Cartproductcard from './Cartproductcard'
import axios from 'axios';
import { useState,useEffect } from 'react';

const Cart = () => {
  const [cartProduct,setCartProduct] = useState([]);

  useEffect(
    () => {
      getcartdata()
    },[]
)

  const getcartdata=()=>{
    axios.get("http://localhost:8000/getCartData").then(async (res) => {
    await setCartProduct(res.data);
    });
  }
  return (
    <div>
      <div className="container">
              <div className="row">
      {
        cartProduct.map((product)=>{
          return (
            

              <Cartproductcard id={product._id} category={product.category} img={product.imgurl} productname={product.productname}  price={product.price} increasedprice={product.increasedprice} brand={product.brand} />
              )
            })
          }
          </div>
        </div>
    </div>
  )
}

export default Cart