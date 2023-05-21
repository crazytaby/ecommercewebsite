import React from 'react'
import Productcard from '../../Components/Productcardlist/Productcard'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Mobile = () => {
    const [productlist, setproductlist] = useState([])
    useEffect(
        () => {
            getProducts()
        }, []
    )
    let getProducts = () => {
        axios.get("http://localhost:8000/products/electronics/mobiles")
            .then(async (res) => {
                await setproductlist(res.data);
            })
    }
    return (
        <>
            <div className="container">
                <h1>Mobiles</h1>
                <div className="row">
                    {
                        productlist.map((product) => {
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

export default Mobile