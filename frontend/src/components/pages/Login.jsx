import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [message, setMessage] = useState("");
  const handleSubmit = () => {};
  const handleInputChange = () => {};
  return (
    <>
      <>
        <h1>Login</h1>

        <form className="form" onSubmit={handleSubmit}>
          {message && <p>{message}</p>}
          <div className="form-body">
            <div className="username">
              <label className="form__label">Username</label>
              <input
                className="form__input"
                type="text"
                id="userName"
                name="userName"
                value={loginData.userName}
                onChange={handleInputChange}
              />
            </div>
            <div className="password">
              <label className="form__label">Password</label>
              <input
                className="form__input"
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
          <div className="loginhere">
            <p>
              Dont have an Account? <Link to="/register">Register Now</Link>
            </p>
          </div>
        </form>
      </>
    </>
  );
};

export default Login;
