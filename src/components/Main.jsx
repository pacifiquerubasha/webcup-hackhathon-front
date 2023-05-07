import React, { useState } from 'react';
import hero from "../assets/hero-il.png"
import sec1 from '../assets/sect-1.png';
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { swiperContent, stats, swiperGallery } from '../pages/content';

import { useAutoAnimate } from '@formkit/auto-animate/react';
function Main(props) {
    const navigate = useNavigate();
    const [animationParent] = useAutoAnimate();

    const [isChatOpen, setIsChatOpen] = useState(false);

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
                <button className="main__btn" onClick={()=>navigate("/login")}>
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
                    <img src={sec1} alt="" />
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
                            <i className="fas fa-user"></i>
                            <div>
                                <span>Personalized Dream Analysis</span>
                                <p>
                                Decode the meaning of your dreams and unlock insights for your future
Icon: A magnifying glass over a dream cloud.                              
                                </p>
                            </div>
                    </div>
                    <div className="solution" data-aos="fade-up" data-aos-duration="2000">
                            <i className="fas fa-book"></i>
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

        <div className="section-virtual">
            <div className="container flex flex-col items-center">
                <h1>Hold on! We have more.</h1>
                <p className='text-lg mb-3 mt-1 text-center'>
                    Experience your dreams like never before with our immersive VR demo. 
                    Take the first step towards making your dreams a reality and start exploring now!
                </p>

                <a href="https://virtualdream2023.netlify.app/" target="_blank">
                    <button className='text-lg px-3'>
                        <span>Try VR</span>
                    </button>
                </a>
            </div>
        </div>

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
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1180: {
                            slidesPerView: 3,
                          },
                      }}
                    >

                    {swiperContent.map((testimonial)=>{
                        return (
                            <SwiperSlide data-aos="flip-up" data-aos-duration="1000">
                                <div className="flex justify-between mx-auto">
                                    <div className="flex flex-col slider-top">
                                    <div className="slider-image">
                                        <img src={testimonial.image} alt="Testimonial"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-xl">{testimonial.name}</span>
                                        <span className="text-gray font-semibold">{testimonial.address}</span>
                                    </div>
                                    </div>
                                    <div className="flex items-center text-lg font-semibold">{testimonial.rating}</div>
                                </div>
                                <div className="text-md mt-2 text-lg">
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
                <div className="flex w-4/5 mx-auto gap-2 call-container">
                    <div className="call-left flex flex-col justify-center w-1/2" data-aos="fade-right" data-aos-duration="1000">
                        <h1 className="text-5xl mb-2">Dream Art Gallery: Surrealism, Fantasy, and Imagination</h1>
                        <p>Immerse yourself in the enchanting world of dream-inspired art, featuring the works of talented artists from around the globe.</p>
                    </div>
                    <div className="call-right w-1/2 flex justify-start relative" data-aos="fade-left" data-aos-duration="1000">
                      
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                            >

                            {swiperGallery.map((item)=>{
                                return (
                                    <SwiperSlide data-aos="flip-up" data-aos-duration="1000">
                                        <img src={item} alt="" width="75%" height="75%" className="cover rounded-small"/>
                                        <img src={item} alt="" width="75%" height="75%" className="cover shadow-1 rounded-md"/>

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

                <button onClick={()=>navigate("/login")}>
                    <span>Sign Up Now</span>
                </button>
            </div>
        </section>

        <div ref={animationParent} className='chat-container'>

            {isChatOpen &&
                <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/43dc714d-6bc9-4601-88ce-6dc183ed7e72">
                </iframe>
            }
            
             <div className="chat-icon" onClick={()=>setIsChatOpen(!isChatOpen)}>
                <i className='fas fa-comment-dots text-5xl'></i>             
             </div>
        </div>


    
    </main>
    );
}

export default Main;