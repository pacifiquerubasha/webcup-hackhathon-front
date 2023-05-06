import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function Login(props) {
    const [animationParent] = useAutoAnimate();

    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='login w-screen h-screen flex'>

            <div ref={animationParent} className={`login-container ${!isLogin && "login__isNotLogin"} flex`} >
                {isLogin ? 

                <LoginForm setIsLogin={setIsLogin}/>

                :

                <SignUpForm setIsLogin={setIsLogin}/>

                }
                

                
            </div>         
            
        </div>
    );
}

export default Login;
