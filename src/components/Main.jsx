import React from 'react';
import bulb from "../assets/bulb.jpg"
import solution from "../assets/solution.jpg"
import hero from "../assets/hero-il.png"
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { swiperContent, stats } from '../pages/content';

function Main(props) {
    const navigate = useNavigate();

    return (
        <main>
        <div className="hero"  data-aos="zoom-in" data-aos-duration="1000">
            <h1>
                <span className='text-gradient'>Decode Your Dreams, Predict Future.</span>
                AI Dream Analysis.
            </h1>
            <p>
            Using our team of dream analysis experts and innovative Onirix AI technology, discover the hidden meanings
             in your dreams and gain valuable insights about what's to come.
            </p>
            <div className="cta">
                <button className="main__btn" onClick={()=>navigate("/about")}>
                  <span>Try our App</span>  
                </button>
            </div>

            <img src={hero} alt="Hero" />

        </div>

        <section className="section1" >
            <div className="container">
                <div className="container-left" data-aos="fade-left" data-aos-duration="1000">

                    <div className="section-title">
                        <h3>Dream Analysis Challenge</h3>
                        <div className='circles'>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>
                    </div>

                    <p className='section-subtitle'>
                    Discovering the true meaning of your dreams and unlocking insights to guide your future.
                    </p>
                    <ul>
                        <li>
                            <div>
                                <i className="fas fa-check"></i>
                            </div>
                            <div>
                                <span>Cryptic Dream Symbols</span>
                                <p>
                                    Deciphering Mysterious Dream Imagery                                
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i className="fas fa-check"></i>
                            </div>
                            <div>
                                <span>Elusive Dream Meanings</span>
                                <p>
                                    Finding Clarity in Dream Interpretation
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i className="fas fa-check"></i>
                            </div>
                            <div>
                                <span>Forgotten Dream Insights</span>
                                <p>
                                    Remembering and Analyzing Dream Narratives
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="container-right" data-aos="fade-right" data-aos-duration="1000">
                    <img src={bulb} alt="" />
                </div>
            </div>
        </section>

        <section className="section2">
            <div className="container">

                <div className="section-title">
                    <h3>Our Services</h3>
                    <div className='circles'>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="line"></div>

                    </div>
                </div>

                <p className='section-subtitle'>
                How we can help you unlock the power of your dreams
                </p>

                <div className='solutions'>
                    <div className="solution" data-aos="fade-right" data-aos-duration="1000">
                            <i className="fas fa-ruler"></i>
                            <div>
                                <span>Personalized Dream Analysis</span>
                                <p>
                                Decode the meaning of your dreams and unlock insights for your future
Icon: A magnifying glass over a dream cloud.                              
                                </p>
                            </div>
                    </div>
                    <div className="solution" data-aos="fade-up" data-aos-duration="2000">
                            <i className="fas fa-bolt"></i>
                            <div>
                                <span>Dream Journaling</span>
                                <p>
                                Track your dreams and identify patterns for deeper self-awareness
Icon: A notebook with a pen on top of a dream cloud                     
                                </p>
                            </div>
                    </div>

                    <div className="solution" data-aos="fade-left" data-aos-duration="1500">
                            <i className="fas fa-bolt"></i>
                            <div>
                                <span>Future Predictions</span>
                                <p>
                                Discover the potential outcomes of your future through your dreams
Icon: A crystal ball over a dream cloud                   
                                </p>
                            </div>
                    </div>
                    
                </div>


                    
                
            </div>
        </section>

        <section className='section3'>
            <div className="container">
                
                <div className="flex flex-col items-center timeline mx-auto w-1/2 py-3">
                    <div className="section-title">
                        <h3>How Onirix Works</h3>
                        <div className='circles'>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="line"></div>

                        </div>
                    </div>

                    <p className='section-subtitle text-center mb-4'>
                    Our three-step process to decoding the secrets of your dreams
                    </p>
                    <div className="flex gap-1">
                        <div className="flex flex-col items-center timeline-left">
                            <div className="round-icon flex items-center justify-center text-xl rounded-full bg-white ">
                                <span>01</span>
                            </div>
                            
                            <div className="h-auto border"></div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div className="pt-1 text-xl timeline-element">Submit Your Dream</div>
                            <div className="mt-1 pb-2">
                            Fill out our easy-to-use submission form and provide us with all the necessary details of your dream.
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-1">
                        <div className="flex flex-col items-center timeline-left">
                            <div className="round-icon flex items-center justify-center text-xl rounded-full bg-white ">
                                <span>02</span>
                            </div>
                            
                            <div className="h-auto border"></div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div className="pt-1 text-xl timeline-element">Dream Analysis</div>
                            <div className="mt-1 pb-2">
                            Our advanced Onirix AI technology decodes the symbols and meaning in your dream.
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-1">
                        <div className="flex flex-col items-center timeline-left">
                            <div className="round-icon flex items-center justify-center text-xl rounded-full bg-white ">
                                <span>03</span>
                            </div>
                            
                            <div className="h-auto border"></div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div className="pt-1 text-xl timeline-element">Receive Your Prediction</div>
                            <div className="mt-1 pb-2">
                            Receive your personalized premonitory prediction and useful information about upcoming events.
                            </div>
                        </div>
                    </div>


                    </div>


            </div>

        </section>  

        <section className='section4 '>
            <div className="container flex-col">
                <div className="section-title">
                    <h3>What Our Clients Say</h3>
                    <div className='circles'>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="line"></div>

                    </div>
                </div>

                <p className='section-subtitle text-center mb-4'>
                Hear from our satisfied customers about their experience with Onirix
                </p>
                

                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={true} modules={[Navigation, Pagination]}
                    >

                    {swiperContent.map((testimonial)=>{
                        return (
                            <SwiperSlide data-aos="flip-up" data-aos-duration="1000">
                                <div class="flex justify-between mx-auto">
                                    <div class="flex flex-col slider-top">
                                    <div class="slider-image">
                                        <img src={testimonial.image} alt="Testimonial"/>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-lg font-semibold text-xl">{testimonial.name}</span>
                                        <span class="text-gray font-semibold">{testimonial.address}</span>
                                    </div>
                                    </div>
                                    <div class="flex items-center text-lg font-semibold">{testimonial.rating}</div>
                                </div>
                                <div class="text-md mt-2 text-lg">
                                    {testimonial.testimonial}
                                </div>

                            </SwiperSlide>
                        )
                    })

                    }


                </Swiper>
                
            </div>

        </section>

        

        <section className='section-stats'>
            <div className="container flex-col items-center">
                <div className="section-title">
                    <h3>Our Achievements</h3>
                    <div className='circles'>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="line"></div>

                    </div>
                </div>

                <p className='section-subtitle text-center mb-4'>
                Take a look at our impressive achievements and discover how we've made a difference in people's lives.
                </p>

                <div className="stats flex justify-around w-full">
                    {stats.map((stat, i)=>{
                        return (
                            <div className="stat flex flex-col items-center">
                                <span className="total">{stat.value}</span>
                                <span className="label">{stat.label}</span>
                            </div>
                        )
                    })

                    }                   

                </div>
                
            </div>
        </section>

        <section>
            <div className="container">
                <div class="flex w-4/5 mx-auto gap-2 call-container">
                    <div class="call-left flex flex-col justify-center w-1/2" data-aos="fade-right" data-aos-duration="1000">
                        <h1 class="text-5xl mb-2">Dream Art Gallery: Surrealism, Fantasy, and Imagination</h1>
                        <p>Immerse yourself in the enchanting world of dream-inspired art, featuring the works of talented artists from around the globe.</p>
                    </div>
                    <div class="call-right w-1/2 flex justify-start relative" data-aos="fade-left" data-aos-duration="1000">
                      
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                            >

                            {swiperContent.map((testimonial)=>{
                                return (
                                    <SwiperSlide data-aos="flip-up" data-aos-duration="1000">
                                        <img src={solution} alt="" width="75%" height="75%" class="cover rounded-small"/>
                                        <img src={solution} alt="" width="75%" height="75%" class="cover shadow-1 rounded-md"/>

                                    </SwiperSlide>
                                )
                            })

                            }


                        </Swiper>

                    </div>
                </div>
            </div>
        </section>

        <section className='section-cta' data-aos="zoom-in" data-aos-duration="1000">
            <div className="container">
                <h4>Ready to Unlock Your Dreams?</h4>
                <p>
                Discover the power of dream interpretation with Onirix AI. Sign up now and gain access
                 to personalized dream analysis and premonitory predictions.
                </p>

                <button onClick={()=>navigate("/predictor")}>
                    <span>Sign Up Now</span>
                </button>
            </div>
        </section>


    
    </main>
    );
}

export default Main;