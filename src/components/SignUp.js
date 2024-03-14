import React from "react";
import { useState } from "react";
import { FaSquareFacebook, FaGooglePlus, FaLinkedin } from "react-icons/fa6";
const SignUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { name } = state;

    alert(`your are signed in with ${name}`);
    setState({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <div div className="social-container">
          <a href="#" className="social">
            <FaSquareFacebook />
          </a>
          <a href="#" className="social">
            <FaGooglePlus />
          </a>
          <a href="#" className="social">
            <FaLinkedin />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          placeholder="enter yiur name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
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
      
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignUp;
