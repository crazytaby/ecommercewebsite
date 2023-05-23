import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Testimonial.css'
import Sliderimg1 from './t1.jpg'
import Sliderimg2 from './t2.jpg'
import Sliderimg3 from './t3.jpg'
import Sliderimg4 from './t4.jpg'
import Sliderimg5 from './t5.jpg'
import Sliderimg6 from './t6.jpg'
import Sliderimg7 from './t7.jpg'
import Sliderimg8 from './t8.jpg'


const Testimonial = () => {
    return (
        <section>
        <div className="container">
        <Splide hasTrack={ true }  aria-label="My Favorite Images" options={ {
            type   : 'loop',
            autoplay:true,
            // padding: '20rem',
            // gap:"1rem",
            arrows:true,
            height:500,
            perPage:3,
            perMove:3,
            // breakpoints: {
            //     1400:{
            //         padding:"10rem",

            //     },
            //     1200:{
            //         padding:"0rem",

            //     },
            //     992:{
            //     height:300,

            // },
            //     425:{
            //     height:300,

            // },
            // },
          }}>
            <SplideSlide >
                
            <div class="card-1">
                        <div class="image-content">
                            <span class="overlay-1"></span>
                            <div class="card-image">
                                <img src={Sliderimg1} alt=""  class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">john</h2>
                            <p class="description">The <b> Gada shop</b> website is best for shopping 
                                it provide product at very reasonable rate and offer to the customers. 
                                It best service is pay later facilities.
                                   it helpful in emergency and 
                                  fast delivery other than other e commerce site.
                            </p>
                            <button class="button">View more</button>
                        </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
                
            <div class="card-1">
                        <div class="image-content">
                            <span class="overlay-1"></span>
                            <div class="card-image">
                                <img src={Sliderimg2} alt=""  class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">john</h2>
                            <p class="description">The <b> Gada shop</b> website is best for shopping 
                                it provide product at very reasonable rate and offer to the customers. 
                                It best service is pay later facilities.
                                   it helpful in emergency and 
                                  fast delivery other than other e commerce site.
                            </p>
                            <button class="button">View more</button>
                        </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
                
            <div class="card-1">
                        <div class="image-content">
                            <span class="overlay-1"></span>
                            <div class="card-image">
                                <img src={Sliderimg3} alt=""  class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">john</h2>
                            <p class="description">The <b> Gada shop</b> website is best for shopping 
                                it provide product at very reasonable rate and offer to the customers. 
                                It best service is pay later facilities.
                                   it helpful in emergency and 
                                  fast delivery other than other e commerce site.
                            </p>
                            <button class="button">View more</button>
                        </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
                
            <div class="card-1">
                        <div class="image-content">
                            <span class="overlay-1"></span>
                            <div class="card-image">
                                <img src={Sliderimg4} alt=""  class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">john</h2>
                            <p class="description">The <b> Gada shop</b> website is best for shopping 
                                it provide product at very reasonable rate and offer to the customers. 
                                It best service is pay later facilities.
                                   it helpful in emergency and 
                                  fast delivery other than other e commerce site.
                            </p>
                            <button class="button">View more</button>
                        </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
                
            <div class="card-1">
                        <div class="image-content">
                            <span class="overlay-1"></span>
                            <div class="card-image">
                                <img src={Sliderimg5} alt=""  class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">john</h2>
                            <p class="description">The <b> Gada shop</b> website is best for shopping 
                                it provide product at very reasonable rate and offer to the customers. 
                                It best service is pay later facilities.
                                   it helpful in emergency and 
                                  fast delivery other than other e commerce site.
                            </p>
                            <button class="button">View more</button>
                        </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
                
            <div class="card-1">
                        <div class="image-content">
                            <span class="overlay-1"></span>
                            <div class="card-image">
                                <img src={Sliderimg6} alt=""  class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">john</h2>
                            <p class="description">The <b> Gada shop</b> website is best for shopping 
                                it provide product at very reasonable rate and offer to the customers. 
                                It best service is pay later facilities.
                                   it helpful in emergency and 
                                  fast delivery other than other e commerce site.
                            </p>
                            <button class="button">View more</button>
                        </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
                
            <div class="card-1">
                        <div class="image-content">
                            <span class="overlay-1"></span>
                            <div class="card-image">
                                <img src={Sliderimg7} alt=""  class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">john</h2>
                            <p class="description">The <b> Gada shop</b> website is best for shopping 
                                it provide product at very reasonable rate and offer to the customers. 
                                It best service is pay later facilities.
                                   it helpful in emergency and 
                                  fast delivery other than other e commerce site.
                            </p>
                            <button class="button">View more</button>
                        </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
                
            <div class="card-1">
                        <div class="image-content">
                            <span class="overlay-1"></span>
                            <div class="card-image">
                                <img src={Sliderimg8} alt=""  class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">john</h2>
                            <p class="description">The <b> Gada shop</b> website is best for shopping 
                                it provide product at very reasonable rate and offer to the customers. 
                                It best service is pay later facilities.
                                   it helpful in emergency and 
                                  fast delivery other than other e commerce site.
                            </p>
                            <button class="button">View more</button>
                        </div>
                    </div>
            </SplideSlide>
        </Splide>
        </div>
        </section>

    )
}

export default Testimonial