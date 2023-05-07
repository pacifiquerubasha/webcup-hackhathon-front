import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { values, team } from './content';
import story1 from "../assets/story-1.png";
import story2 from "../assets/story-2.png";
import story3 from "../assets/story-3.png";
import story4 from "../assets/story-4.png";
import mission from "../assets/mission.png"
import ladyVR from "../assets/lady-vR.jpeg";
import { useNavigate } from 'react-router-dom';


function AboutUs(props) {
    
    
    const [animationParent] = useAutoAnimate();
    const [iframeParent] = useAutoAnimate();
    const [isChatOpen, setIsChatOpen] = useState(false);


    const navigate = useNavigate();

    return (
        <>
            <Header/>

            <div ref={animationParent} className='about-container' data-aos="zoom-in" data-aos-duration="100">
                
                <div className='about-hero'>
                    <h1 className='text-gradient'>Our story of innovation, impact, and growth</h1>
                    <p>
                        At International Institute of Dreams, we believe that technology can change lives. 
                        That's why we've dedicated ourselves to developing innovative solutions that solve real-world problems.<br/><br/>
                        Our company is a dynamic team of experts in their respective fields, united in delivering excellence.
                    </p>
                   
                </div>

                <section className='about'>
                    <div className="container flex" data-aos="zoom-in" data-aos-duration="1000">
                        <div className='about-il'>
                            <img src={story1} alt="" />
                            <img src={story2} alt="" />
                            <img src={story3} alt="" />
                            <img src={story4} alt="" />
                        </div>

                        <div className="about-left">
                            <div className="section-title">
                                <h3>Our Story</h3>
                                <div className='circles'>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="line"></div>

                                </div>
                            </div>
                            <p className=' text-xl mt-2 about-info'>
                                Our company's journey began with a desire to create something extraordinary. 
                                We strive to be more than just a business; we want to make a meaningful impact
                                 on people's lives through our work. Our team is made up of passionate individuals
                                  who are dedicated to achieving this goal. We believe in hard work, innovation,
                                   and delivering quality results that exceed our clients' expectations.
                            </p>
                        </div>

                    </div>
                </section>

                <section className="drive">
                    <div className="container flex">
                        <div className="drive__left">
                            <img src={mission} alt="" />
                        </div>

                        <div className="drive__right">
                            <h1 className='text-gradient'>Charting Our Course: The Path Ahead</h1>

                            <div className='flex justify-between'>
                                <div className="mission flex flex-col">
                                    <h3>Mission</h3>
                                    <p>
                                    At International Institute of Dreams , we strive to deliver the best possible services to our clients.
                                     Our mission is to provide top-quality solutions that address the unique needs 
                                     of our clients, while maintaining the highest standards of professionalism and 
                                     integrity. We are committed to delivering exceptional customer service and
                                      building long-lasting relationships with our clients.
                                    </p>
                                </div>
                                <div className="vision flex flex-col">
                                    <h3>Vision</h3>
                                    <p>
                                    Our vision is to become a leading provider of innovative and cutting-edge solutions
                                     in our industry. We aim to be the go-to partner for our clients, offering
                                      them unmatched expertise, exceptional service, and unbeatable value. We will
                                       continue to invest in our people, our technology, and our processes to
                                        stay ahead of the curve and to deliver the best possible outcomes for
                                         our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


                <section className='features-section'>
                    <div className="container flex-col">

                        <div className="section-title" data-aos="fade-down" data-aos-duration="1000">
                            <h3>Core Values</h3>
                            <div className='circles'>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="line"></div>

                            </div>
                        </div>

                        <div className="features flex justify-around" data-aos="fade-up" data-aos-duration="1000">
                            
                            {values.map((value, i)=>{
                                return (
                                    <div className="feature flex flex-col justify-center items-center" key={i}>
                                        <div className="progress-bar">
                                            <i className={value.icon}></i>
                                        </div>
                                        <h5>{value.title}</h5>
                                        <p>{value.subtitle}</p>
                                    </div>
                                )
                            })

                            }

                        </div>                        

                    </div>


                </section>    
                
                <section className="call">
                    <div className="container flex p-2">
                        <img src={ladyVR} alt="" />
                        <div>
                            <h5>Join Our Movement and Experience the Power of Our App</h5>
                            <button className='try' onClick={()=>navigate("/contact")}>
                                 <span>Join Our Team</span> 
                            </button>
                            <button className='join' onClick={()=>navigate("/login")}>                                
                                <span>Try Our App</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="team">
                    <div className="container flex flex-col">
                        <div className="section-title mb-5">
                            <h3>Our Team</h3>
                            <div className='circles'>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="line"></div>

                            </div>
                        </div>
                        <div className="team-bottom flex justify-around">                       

                            {team.map((member, i) =>{
                                return (
                                    <div className="member flex flex-col items-center" data-aos="flip-up" data-aos-duration="1000">
                                        <img src={member.img} alt="" />
                                        <div className="content">
                                            <h5>{member.name}</h5>
                                            <span>{member.role}</span>
                                            <p className='text-center'>{member.desc}</p>
                                            <div className='flex justify-around handles'>
                                                <a href={member.github} target="_blank"><i className='fab fa-github'></i></a>
                                                <a href={member.twitter} target="_blank"><i className='fab fa-twitter'></i></a>
                                                <a href={member.linkedin} target="_blank"><i className='fab fa-linkedin'></i></a>
                                                <a href={member.instagram} target="_blank"><i className='fab fa-instagram'></i></a>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                            }        
                        </div>                

                    </div>
                
                </section>            
        

            </div>


            <div ref={iframeParent} className='chat-container'>

                {isChatOpen &&
                    <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/43dc714d-6bc9-4601-88ce-6dc183ed7e72">
                    </iframe>
                }
                
                <div className="chat-icon" onClick={()=>setIsChatOpen(!isChatOpen)}>
                    <i className='fas fa-comment-dots text-5xl'></i>             
                </div>
            </div>

            

            <Footer/>
            
        </>
    );
}

export default AboutUs;