import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

import axios from "axios";

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // Access the navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9090/login",
        loginData, // Send the loginData object as the request body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        if (response.data === "Login successful!") {
          // Login successful
          setMessage(<span style={{ color: "green" }}>Login Success</span>);
          navigate(`/home/${loginData.userName}`);
        } else if (response.data === "Login failed") {
          // Login failed
          setMessage(
            <span style={{ color: "red" }}>Incorrect Username or Password</span>
          );
        }
      } else {
        // Handle other status codes if needed
        setMessage(
          <span style={{ color: "red" }}>Login Failed. Please try again!</span>
        );
      }
    } catch (error) {
      console.error(error);
      setMessage(
        <span style={{ color: "red" }}>Login Failed. Please try again!</span>
      );
    }
  };

  return (
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
            Don't have an Account? <Link to="/">Register Now</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
