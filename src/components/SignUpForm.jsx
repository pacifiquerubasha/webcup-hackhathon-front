import React, {useState} from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function SignUpForm({setIsLogin}) {

    const [isShowPassword2, setIsShowPassword2] = useState(false);
    const [isError, setIsError] = useState(false);

    const [animationParent] = useAutoAnimate();

    return (
        <div className="signup-form">
            <h3 className='text-gradient'>SignUp</h3>
            {isError && <div className="message">An error occurred</div>}
            <div>
                <label htmlFor="firstName">First Name</label>
                <input aria-label='firstName' type="text" id='firstName' placeholder="First Name" />
            </div>
            <div>
                <label htmlFor="username">Last Name</label>
                <input aria-label='Last Name' type="text" id='username' placeholder="Username" />
            </div>
            <div>
                <label htmlFor="username">Email</label>
                <input aria-label='Email' type="text" id='username' placeholder="Username" />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input aria-label='Username' type="text" id='username' placeholder="Username" />
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <div className="pass">
                    <input aria-label='Password' type={`${isShowPassword2 ? "text" : "password"}`} id='password' placeholder="Password" />
                    <i className={`fas ${isShowPassword2 ? "fa-eye-slash" : "fa-eye"}`} onClick={()=>setIsShowPassword2(!isShowPassword2)}></i>
                </div>
            </div>
            <input type="submit" value="Sign Up" className='submit-signup' />

            <div className="more">
                <span>Already have an account?</span> <a onClick={()=>setIsLogin(true)}>Login</a>
            </div>
        </div>
    );
}

export default SignUpForm;