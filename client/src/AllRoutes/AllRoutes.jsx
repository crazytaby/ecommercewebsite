import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Aboutus from '../Pages/Aboutus/Aboutus'
import Contactus from '../Pages/Contactus/Contactus'
import Cart from '../Pages/Cart/Cart'
import Wishlist from '../Pages/Wishlist/Wishlist'
import User from '../Pages/User/User'
import Product from '../Pages/Product/Product'

export default function AllRoutes() {
  return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<Aboutus/>}/>
            <Route path='/contact-us' element={<Contactus/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/products' element={<Product/>}/>
        </Routes>
  )
}
