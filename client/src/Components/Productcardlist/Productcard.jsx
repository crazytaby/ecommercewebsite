import React from 'react'

const Productcard = () => {
    return (
        <>
            <div class="product-div">
                <div class="product-img">
                    <figure>
                        <img src="assets/images/custom_img/trending products/image1.jpg" alt="" />
                    </figure>
                </div>
                <div class="product-info">
                    <h5 class="product-info-h5">OnePlus Nord CE 2 Lite 5G</h5>
                    <div class="price">
                        <h6 class="product-price">₹18,990</h6>
                        <span class="product-red-price">₹19,990.00</span>
                    </div>
                </div>

                <div class="quantity-sect">
                    <div class="product-quantity">
                        <button class="quantity-btn" type="button">-</button>
                        <input class="quantity-input" type="text" value="1" />
                        <button class="quantity-btn" type="button">+</button>
                    </div>
                    <button class="add-to-cart-btn">Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Productcard