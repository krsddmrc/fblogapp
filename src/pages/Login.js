import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword, signUpProvider, 
signIn, } from "../helpers/firebase";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);    
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="register-form">
        <h1 className="form-title display-3">--Login--</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">           
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            /> 
            <label htmlFor="email" className="form-label"  >     
            Email is required   
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"></label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
            onSubmit={handleSubmit}
          />
        </form>
        <button
          className="btn btn-primary form-control"
          onClick={handleProviderLogin}
        >  add Google Logo & link
        </button>
      </div>
    </div>
  );
};

export default Login;
