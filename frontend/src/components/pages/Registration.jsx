import React, { useEffect, useState } from "react";
import "../../index.css";

import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({
      email: "",
      userName: "",
      firstName: "",
      lastName: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/create",
        formData
      );
      resetForm();
      // Assuming the server returns a message upon successful registration
      setMessage("User Successfully Registered");
    } catch (error) {
      // If an error occurs, handle it here (optional)
      console.error("Error:", error.message);
      setMessage("An error occurred during registration.");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 5000); // Set the time in milliseconds (e.g., 5000 ms = 5 seconds)

    // Clean up the timer when the component unmounts or when message changes
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <>
      <h1>User Registration</h1>
      {message && <p>{message}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-body">
          <div className="username">
            <label className="form__label">Username</label>
            <input
              className="form__input"
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
            />
          </div>
          <div className="firstname">
            <label className="form__label">First Name</label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="lastname">
            <label className="form__label">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="form__input"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="email">
            <label className="form__label">Email</label>
            <input
              type="email"
              id="email"
              className="form__input"
              name="email"
              value={formData.email}
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
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Registration;
