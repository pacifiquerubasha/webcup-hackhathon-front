import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header({isUser}) {
    const navigate = useNavigate();
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > window.innerHeight) {
            setIsHeaderFixed(true)
          } else {
            setIsHeaderFixed(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <header className={`${isHeaderFixed ? "headerFixed" : ""}`}>
            <a href="/" className="logo"><span>D</span>omnasty</a>

            <nav>
                <ul>
                    {isUser ? 

                    <>
                        <li>
                            <a onClick={()=>navigate("/app")}>Dream Gallery</a>
                        </li>
                        <li>
                            <a onClick={()=>navigate("/app/explain-dreams")}>Science of Dreams</a>
                        </li>                        
                    
                    </>:

                    <>                    
                        <li>
                            <a onClick={()=>navigate("/about")}>About Us</a>
                        </li>
                        <li>
                            <a onClick={()=>navigate("/blog")}>Blog</a>
                        </li>
                        {/* <li>
                            <a href="">Services</a>
                        </li>                     */}
                        <li>
                            <a onClick={()=>navigate("/contact")}>Contact</a>
                        </li>                    
                    </>
                        
                    
                    }
                    
                
                </ul>
                <div className="socials">
                    {isUser ? 

                    <div className='profile_initial'>
                        A
                    </div>

                    :
                    <>
                        <a href=""><i className="fab fa-github"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-discord"></i></a>
                    
                    </>
                    }
    
                </div>
            </nav>

            <div className='toggle-menu'>
                <input type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden"/>
                <label htmlFor="checkbox1">
                    <div className="hamburger hamburger1">
                        <span className="bar bar1"></span>
                        <span className="bar bar2"></span>
                        <span className="bar bar3"></span>
                        <span className="bar bar4"></span>
                    </div>
                </label>
            </div>


        </header>
    );
}

export default Header;