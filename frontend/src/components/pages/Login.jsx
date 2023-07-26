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
        "http://localhost:8081/login",
        loginData
      );

      // Assuming the server returns a message upon successful login
      setMessage(response.data.message);

      // If login is successful, navigate to the home page
      if (response.status === 200) {
        navigate(`/home?username=${loginData.userName}`);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage(
          <span style={{ color: "red" }}>{error.response.data.message}</span>
        );
      } else {
        console.error("Error:", error.message);
        setMessage(
          <span style={{ color: "red" }}>
            An error occurred. Please try again later.
          </span>
        );
      }
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
