import React, { useState,useEffect } from 'react'
import Productcard from './Productcard'
import './Productcardlist.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Laptopcardlist = () => {

    const [productlist,setproductlist]=useState([])
    useEffect(
        ()=>{
            getProducts()
        },[]
    )
    let getProducts=()=>{
        axios.get("http://localhost:8000/products/electronics/laptops")
        .then(async (res)=>{
            await setproductlist(res.data);
        })
    }
  return (
    <>
    <section className="section best-seller-section pt-0">
            <div className="pt-lg-5">
                <div className="container">
                    <div className="section-head">
                        <div className="section-head-wrap">
                            <div className="shopby-text">
                                For You
                            </div>
                            <div className="categories-text m-0 pb-2 pt-0">
                                Laptop
                            </div>
                        </div>
                        <div className="section-head-btn">
                            <Link to='/products/electronics/laptops'>Veiw all</Link>
                        </div>
                    </div>
                    <div className="product-section">
                        <div className="row">
                            {
                            productlist.map((product,index)=>{
                                if(index<=3)
                                {
                                    return(
                                    <Productcard id={product._id} category={product.category} img={product.imgurl} productname={product.productname}  price={product.price} increasedprice={product.increasedprice} rating={product.rating} />
                                    )
                                }
                                else{
                                    return ""
                                }
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}


export default Laptopcardlist