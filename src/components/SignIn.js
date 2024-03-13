import React from "react";
import { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  //   const handleChange = (evt) => {
  //     const value = evt.target.value;
  //     setState({
  //       ...state,
  //       [evt.target.name]: value,
  //     });
  //   };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="form-container sign-in-container">
      <form>
        <h1>Sign-In</h1>
        <div div className="social-container">
          <a href="#" className="social">
            <FaSquareFacebook />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={state.password}
          onChange={handleChange}
          required
        />
      </form>
    </div>
  );
};

export default SignIn;
