import React from 'react'
import './Slider.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Sliderimg1 from '../Slider/im1.jpg'
import Sliderimg2 from '../Slider/im2.jpg'
import Sliderimg3 from '../Slider/im3.jpg'


const Slider = () => {
    return (

        <Splide hasTrack={ true }  aria-label="My Favorite Images" options={ {
            type   : 'loop',
            autoplay:false,
            // padding: '20rem',
            // gap:"1rem",
            arrows:true,
            height:500,
            breakpoints: {
                1400:{
                    padding:"10rem",

                },
                1200:{
                    padding:"0rem",

                },
                992:{
                height:300,

            },
                425:{
                height:300,

            },
            },
          }}>
            <SplideSlide >
                <div className="img-div">
                <img className='slider-img' src={Sliderimg1} alt="Img-1" />
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="img-div">
                <img className='slider-img' src={Sliderimg2} alt="Img-2" />
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="img-div">
                <img className='slider-img' src={Sliderimg3} alt="Img-2" />
                </div>
            </SplideSlide>
        </Splide>
    )
}

export default Slider