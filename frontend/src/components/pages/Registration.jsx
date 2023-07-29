import React, { useEffect, useState } from "react";
import "../../index.css";

import { Link } from "react-router-dom";

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

    // Check if any required fields are empty
    const requiredFields = [
      "email",
      "userName",
      "firstName",
      "lastName",
      "password",
    ];
    const emptyFields = requiredFields.filter(
      (field) => !formData[field].trim()
    );

    if (emptyFields.length > 0) {
      setMessage(
        <span style={{ color: "red" }}>
          Please fill in all the required fields.
        </span>
      );
      return;
    }

    try {
      //Checking If User already REGISTERED
      const usernameResponse = await axios.get(
        `http://localhost:9090/validateUser/${formData.userName}`
      );

      if (usernameResponse.data.exists) {
        setMessage(
          <span style={{ color: "red" }}>
            User Already Exists. Please choose a different username.
          </span>
        );
        return;
      }

      const fetchResponse = await fetch("http://localhost:9090/create", {
        // spring backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (fetchResponse.status === 200) {
        setMessage(
          <span style={{ color: "green" }}>Registration Success!</span>
        );
        resetForm();
      }
    } catch (error) {
      setMessage(
        <span style={{ color: "red" }}>
          Registration Failed. Please try again later.
        </span>
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 3000); // Set the time in milliseconds (e.g., 5000 ms = 5 seconds)

    // Clean up the timer when the component unmounts or when message changes
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <>
      <h1>User Registration</h1>

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
        <div className="loginhere">
          <p>
            Already Registered? <Link to="/login">Login Here</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Registration;
