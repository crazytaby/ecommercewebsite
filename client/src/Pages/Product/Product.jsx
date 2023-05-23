import React from 'react'
import Productcardlist from '../../Components/Productcardlist/Productcardlist'
import Laptopcardlist from '../../Components/Productcardlist/Laptopcardlist'

const Product = () => {
  return (
    <>
      <Productcardlist heading="Best Mobiles"/>
      <Laptopcardlist heading="Best Laptops"/>
    </>
  )
}

export default Product