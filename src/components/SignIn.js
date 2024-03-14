import React from "react";
import { useState } from "react";
import { FaSquareFacebook ,FaGooglePlus,FaLinkedin} from "react-icons/fa6";
const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;

    alert(`your are logged in with ${email}`);
    setState({
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
        <h1>Sign-In</h1>
        <div div className="social-container">
          <a href="#" className="social">
            <FaSquareFacebook />
          </a>
          <a href="#" className="social">
            <FaGooglePlus/>
          </a>
          <a href="#" className="social">
                <FaLinkedin/>
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
        <a href="#">Forget your password</a>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
