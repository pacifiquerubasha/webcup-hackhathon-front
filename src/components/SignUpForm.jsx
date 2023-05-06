import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { register } from "../services/apis";

function SignUpForm({ setIsLogin }) {
  const [isShowPassword2, setIsShowPassword2] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputs, setInputs] = useState({});
  const [animationParent] = useAutoAnimate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register(inputs).then((data) => {
      if (data.status === "success") {
        setIsLogin(true);
      }
    });
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h3 className="text-gradient">SignUp</h3>
      {isError && <div className="message">An error occurred</div>}
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          aria-label="firstName"
          type="text"
          name="first_name"
          placeholder="First Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="username">Last Name</label>
        <input
          aria-label="Last Name"
          type="text"
          name="username"
          placeholder="Last name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="username">Email</label>
        <input
          aria-label="Email"
          type="email"
          name="email"
          placeholder="email@gmail.com"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          aria-label="Username"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <div className="pass">
          <input
            aria-label="Password"
            type={`${isShowPassword2 ? "text" : "password"}`}
            name="password1"
            placeholder="Password"
            onChange={handleChange}
          />
          <i
            className={`fas ${isShowPassword2 ? "fa-eye-slash" : "fa-eye"}`}
            name="password1"
            onClick={() => setIsShowPassword2(!isShowPassword2)}
            onChange={handleChange}
          ></i>
        </div>
      </div>
      <div>
        <label htmlFor="Password">Confirm Password</label>
        <div className="pass">
          <input
            aria-label="Password"
            type={`${isShowPassword2 ? "text" : "password"}`}
            name="password2"
            placeholder="Password"
            onChange={handleChange}
          />
          <i
            className={`fas ${isShowPassword2 ? "fa-eye-slash" : "fa-eye"}`}
            name="password2"
            onClick={() => setIsShowPassword2(!isShowPassword2)}
            onChange={handleChange}
          ></i>
        </div>
      </div>
      <input type="submit" value="Sign Up" className="submit-signup" />

      <div className="more">
        <span>Already have an account?</span>{" "}
        <a onClick={() => setIsLogin(true)}>Login</a>
      </div>
    </form>
  );
}

export default SignUpForm;
