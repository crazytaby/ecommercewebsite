import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useState,useEffect } from 'react'
import './Viewproduct.css'
import image1 from './ip1.png'
import image2 from './ip2.png'
import image3 from './ip3.png'
import image4 from './ip5.png'


const Viewproduct = () => {
    const{ category, id} = useParams();
    const [product,setProduct]=useState([])
    useEffect(
        ()=>{
            getProduct()
        },{}
    )
    let getProduct=()=>{
        axios.get("http://localhost:8000/products/electronics/"+category+"/"+id)
        .then(async (res)=>{
            await setProduct(res.data);
        })
    }

  return (
    <>
    <div class="main">
        <div class="elements">
            <div class="ele1">
                <div class="small-img">

                    <img src={product.imgurl} alt='sideimage'/>
                    <img src={image2} alt='sideimage'/>
                    <img src={image3} alt='sideimage'/>
                    <img src={image4} alt='sideimage'/>
                </div>
                <div class="main-img">
                    <img src={product.imgurl} id="imgbox" alt='mainimage'/>
                </div>
            </div>
            <div class="text">
                <div class="content">
                    <p class="brand">Brand : {product.brand}</p>
                    <h2>{product.productname}</h2>
                    <div class="review">
                         <span> Ratings {product.ratings}</span> 
                        <span class="fa fa-star"></span>
                    </div>
                    <div class="price-box">
                        <p class="price">{product.price}</p>
                        <strike>{product.increasedprice} </strike>
                    </div>
                     <button>
                        <span class="fa fa-shopping-cart"></span>
                        Add to Cart
                     </button>

                     <button class="buy">
                        <span class="fa fa-shopping-cart"></span>
                        Buy Now
                     </button>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Viewproduct