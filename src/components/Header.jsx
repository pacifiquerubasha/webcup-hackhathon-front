import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {
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
                    <li>
                        <a onClick={()=>navigate("/about")}>About Us</a>
                    </li>
                    <li>
                        <a onClick={()=>navigate("/blog")}>Blog</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>                    
                    <li>
                        <a href="">Contact</a>
                    </li>
                    
                
                </ul>
                <div className="socials">
                    <a href=""><i className="fab fa-github"></i></a>
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-discord"></i></a>
    
                </div>
            </nav>

        </header>
    );
}

export default Header;