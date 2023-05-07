import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import blogImage from "../assets/about-hero.jpg"
import { dreamArticles } from './content';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useParams } from 'react-router-dom';

function UniqueBlog(props) {

    const {id} = useParams();
    const [blog, setBlog] = useState(null);
    
    useEffect(()=>{
        const currentBlog = dreamArticles.find((blog) => blog.id === id);
        setBlog(currentBlog);        
    }, [])
    

    return (
        <>
            <Header/>

            <div className='blog-container' data-aos="zoom-in" data-aos-duration="100">
                
                <div className='blog-hero'>
                    <h1 className='text-gradient'>Chasing Our Dreams: A Blog for Dreamers</h1>
                    <p>
                    Our blog is dedicated to sharing inspiring stories of people who have chased their dreams and turned them into reality.
                     We believe that dreams have the power to motivate and inspire us to achieve great things. 
                    </p>                   
                </div>    

                <section className="blogs">
                    <div className="container unique__blog flex flex-col">                        
                        <h2 className='unique__blog--title text-gradient'>{blog?.title}</h2>
                        <p className='unique__blog--desc'>
                            {blog?.content?.split("\n").map((paragraph)=>{
                                return(
                                    <p className='blog__paragraph'>
                                        {paragraph}
                                    </p>
                                )
                            })

                            }
                        </p>

                        <div className='flex unique__blog--footer'>
                            <span className='blog_author'>{blog?.author}</span>&nbsp;—&nbsp;
                            <span>{blog?.date}</span>
                        </div>

                    </div>
                
                </section>      
        

            </div>

            

            <Footer/>
            
        </>
    );
}

export default UniqueBlog;