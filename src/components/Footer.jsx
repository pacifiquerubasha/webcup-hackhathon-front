import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer(props) {
    const navigate = useNavigate();
    const scrollToTop = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <footer className='text-center py-2 text-gray' data-aos="zoom-in" data-aos-duration="100">

            <div className="footer-top w-4/5 mx-auto flex">
                <a href="/" className="logo"><span>D</span>omnasty</a>
                <p>
                    We are the International Institute of Dreams, a team of dream experts
                     dedicated to helping people unlock the power of their dreams. 
                     Based in New York City, our goal is to provide personalized insights 
                     and predictions to help our clients achieve their full potential.
                </p>

                <ul className='flex'>
                    <li>
                        <a onClick={()=>navigate("/about")}>About Us</a>
                    </li>
                    <li>
                        <a onClick={()=>navigate("/blog")}>Blog</a>
                    </li>
                    {/* <li>
                        <a href="">Services</a>
                    </li> */}
                    <li>
                        <a onClick={()=>navigate("/contact")}>Contact</a>
                    </li>
                    
                </ul>

                <div className="scroll-top" onClick={scrollToTop}>
                    &#10514;
                </div>

            </div>
            <div className="footer-bottom">
                &copy;Copyright Cyrrus 2023
            </div>


        </footer>
    );
}

export default Footer;