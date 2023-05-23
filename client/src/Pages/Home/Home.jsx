import React from 'react'
import Slider from '../../Components/Slider/Slider';
import Properties from '../../Components/Properties/Properties';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Productcardlist from '../../Components/Productcardlist/Productcardlist'
import Laptopcardlist from '../../Components/Productcardlist/Laptopcardlist'

export default function Home() {
  return (
    <>
    <Slider/>
    <Productcardlist heading="Tending Products"/>
    <Properties/>
    <Laptopcardlist heading="Best seller"/>
    <Testimonial/>
    </>
  )
}
