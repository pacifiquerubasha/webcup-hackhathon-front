import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import blogImage from "../assets/about-hero.jpg"

function Blog(props) {

    const filters = [
        {
            id:1,
            name:"All",
        },
        {
            id:2,
            name:"Category1",
        },
        {
            id:3,
            name:"Category2",
        },
        {
            id:4,
            name:"Category3",
        }
    ]


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
                    <div className="container flex flex-col">
                        <div className="filters flex justify-center w-full">
                            {filters.map((filter, i)=>{
                                return (
                                    <span key={filter.id}>
                                        {filter.name}
                                    </span>
                                )
                            })

                            }                          
                        </div>

                        <div className="articles-list flex">
                            <div className="list-left">
                                <div className="article flex flex-col">
                                    <img src={blogImage} alt="" />

                                    <div className='article-content flex flex-col'>
                                        <div className='author'>
                                            by&nbsp; 
                                            <span>Emmanuel Murairi</span>
                                        </div>
                                        <h3 className='text-gradient'>
                                            Article Title
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Sunt obcaecati saepe cum asperiores blanditiis harum non
                                            explicabo distinctio molestias ut suscipit excepturi iure
                                            unde id ratione, minus iste aspernatur quam.
                                        </p>
                                        <div className="separator"></div>
                                        <span>November 25th, 2023</span>
                                    </div>
                                </div>

                            </div>
                            <div className="list-right">

                            </div>
                        </div>

                    </div>
                
                </section>      
        

            </div>

            

            <Footer/>
            
        </>
    );
}

export default Blog;