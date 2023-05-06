import React, {useEffect, useState} from 'react';
import  ReCAPTCHA  from "react-google-recaptcha";
import { useAutoAnimate } from '@formkit/auto-animate/react';

function LoginForm({setIsLogin}) {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false)
    const [isHideRecaptcha, setIsHideRecaptcha] = useState(true);

    const [animationParent] = useAutoAnimate();

    const handleCaptchaChange = (value)=>{
        setIsCaptchaSuccess(true)
        setTimeout(()=>{
            setIsHideRecaptcha(true)
        }, 1000)
    }

    const [isError, setIsError] = useState(false);


    return (
        <div ref={animationParent} className="login-form">
            <h3 className='text-gradient'>Login</h3>
            {isError && <div className="message">An error occurred</div>}
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder="Username" />
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <div className="pass">
                    <input type={`${isShowPassword ? "text" : "password"}`} id='password' placeholder="Password" />
                    <i className={`fas ${isShowPassword ? "fa-eye-slash" : "fa-eye"}`} onClick={()=>setIsShowPassword(!isShowPassword)}></i>
                </div>
            </div>
            {!isHideRecaptcha && <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
            />}

            <input type="submit" value="Login" className='submit-login' disabled={!isCaptchaSuccessful}/>

            <div className="more">
                <span>Don't have an account yet?</span> <a onClick={()=>setIsLogin(false)}>Sign Up</a>
            </div>
        </div>
    );
}

export default LoginForm;