import React from 'react'
import './Slider.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Sliderimg from '../Slider/sliderimg.jpg' 


const Slider = () => {



    return (

        // <section className="banner p-0">
        //     <div className="splide" role="group" aria-label="Splide Basic HTML Example">
        //         <div className="splide__track">
        //             <ul className="splide__list">
        //                 <li className="splide__slide"><img src={Sliderimg} alt=""/></li>
        //                 <li className="splide__slide"><img src={Sliderimg} alt=""/></li>
        //                 <li className="splide__slide"><img src={Sliderimg} alt=""/></li>
        //             </ul>
        //         </div>
        //     </div>
        // </section>
        
        <Splide hasTrack={ true }  aria-label="My Favorite Images" options={ {
            type   : 'loop',
            autoplay:false,
            padding: '20rem',
            gap:"1rem",
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
                <img className='slider-img' src={Sliderimg} alt="Img-1" />
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="img-div">
                <img className='slider-img' src={Sliderimg} alt="Img-2" />
                </div>
            </SplideSlide>
        </Splide>

        

    )
}

export default Slider