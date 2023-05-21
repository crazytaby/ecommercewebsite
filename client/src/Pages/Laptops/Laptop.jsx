import React from 'react'
import Productcard from '../../Components/Productcardlist/Productcard'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Laptop = () => {
    const [productlist, setproductlist] = useState([])
    useEffect(
        () => {
            getProducts()
        }, []
    )
    let getProducts = () => {
        axios.get("http://localhost:8000/products/electronics/laptops")
            .then(async (res) => {
                await setproductlist(res.data);
            })
    }
    return (
        <>
            <div className="container">
                <h1>Laptops</h1>
                <div className="row">
                    {
                        productlist.map((product, index) => {
                            return (
                                <Productcard id={product._id} category={product.category} img={product.imgurl} productname={product.productname} price={product.price} increasedprice={product.increasedprice} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Laptop