import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/apis";

function LoginForm({ setIsLogin }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false);
  const [isHideRecaptcha, setIsHideRecaptcha] = useState(false);
  const [inputs, setInputs] = useState({});
  const [animationParent] = useAutoAnimate();
  const navigate = useNavigate();
  const handleCaptchaChange = (value) => {
    setIsCaptchaSuccess(true);
    setTimeout(() => {
      setIsHideRecaptcha(true);
    }, 1000);
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    console.log(inputs);

    event.preventDefault();
    login(inputs).then((data) => {
      if (data.status === "success") {
        navigate("/app");
      }
    });
  };

  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    const hasToken = localStorage.getItem("token");
    if(hasToken){
        navigate("/app")
    }

}, [])

  return (
    <div ref={animationParent} className="login-form">
      <form onSubmit={handleSubmit}>
        <h3 className="text-gradient">Login</h3>
        {isError && <div className="message">An error occurred</div>}
        <div>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <div className="pass">
            <input
              type={`${isShowPassword ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <i
              className={`fas ${isShowPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={() => setIsShowPassword(!isShowPassword)}
            ></i>
          </div>
        </div>
        {!isHideRecaptcha && (
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />
        )}

        <input
          type="submit"
          value="Login"
          className="submit-login"
          disabled={!isCaptchaSuccessful}
        />

        <div className="more">
          <span>Don't have an account yet?</span>{" "}
          <a onClick={() => setIsLogin(false)}>Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
