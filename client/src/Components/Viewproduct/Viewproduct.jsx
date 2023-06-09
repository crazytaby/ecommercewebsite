import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Viewproduct.css'
// import './Productdetails.css'
// import image1 from './ip1.png'
import image2 from './ip2.png'
import image3 from './ip3.png'
import image4 from './ip5.png'
import Productdetails from './Productdetails';

const Viewproduct = () => { 
    const { category, id } = useParams();
    const [product, setProduct] = useState([])
    useEffect(
        () => {
            getProduct()
            // getconditon()
        }, {}
    )
    let getProduct = () => {
        axios.get("http://localhost:8000/products/electronics/" + category + "/" + id)
            .then(async (res) => {
                await setProduct(res.data);
            })
    }

    const [conditon,setconditon]=useState(true);

    
//     let getconditon = () => {
        
//         if (product.category=="Mobiles" || product.category=="laptops") {
//             console.log(product.category)
//             setconditon(true)
//         } else {
//             console.log(product)
//             setconditon(false)
//     }
// }
function gotoCart(e) {
    e.preventDefault();

    try {
      axios.post("http://localhost:8000/takeCartData", {
        "imgurl":product.imgurl,
        "productname":product.productname,
        "price":product.price,
        "increasedprice":product.price,
        "brand":product.brand
      });
    } catch (error) {
      console.log(error);
    }
  } 

  


    return (
        <>
            <div className="main">
                <div className="elements">
                    <div className="row">
                        <div className="px-lg-3 px-0 col-lg-6 col-12 pb-lg-0 pb-5">

                            <div className="ele1">
                                <div className="small-img" >
                                    <img src={product.imgurl} alt='sideimage' />
                                    <img src={image2} alt='sideimage' />
                                    <img src={image3} alt='sideimage' />
                                    <img src={image4} alt='sideimage' />
                                </div>
                                <div className="main-img">
                                    <img src={product.imgurl} id="imgbox" alt='mainimage' />
                                </div>
                            </div>
                        </div>
                        <div className="px-lg-3 px-0 col-lg-6 col-12 d-flex align-items-center justify-content-center">
                            <div className="text">
                                <div className="content">
                                    <p className="review">Brand : {product.brand}</p>
                                    <h2>{product.productname}</h2>
                                    <div className="review">
                                        <i class='bx bxs-star'></i>
                                        <span> Ratings {product.ratings}</span>
                                    </div>
                                    <div className="price-box">
                                        <p className="price">{product.price}</p>
                                        <strike className="decreaseprice">{product.increasedprice} </strike>
                                    </div>
                                    <div className="quantity-sect">
                                        <button className='add-to-cart-btn' >
                                        <Link to='/buy'>
                                            Buy Now
                                        </Link>
                                            </button>
                                        <button className="add-to-cart-btn" onClick={gotoCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-lg-block d-none px-lg-3 px-0 col-lg-6 col-12 d-flex align-items-center justify-content-center">
                        </div>
                        <div className="px-lg-3 px-0 col-lg-6 col-12 d-flex align-items-center justify-content-center">

                                    <Productdetails ram={product.ram} storage={product.storage} frontcamera={product.frontcamera} backcamera={product.backcamera} battery={product.battery} processor={product.processor} display={product.display} />

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Viewproduct