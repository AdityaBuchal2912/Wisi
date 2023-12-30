import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSignUp = () => {
  //   // Validate email and password (add your validation logic here)

  //   // Retrieve existing users from local storage or initialize an empty array
  //   const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  //   // Check if the email is already registered
  //   const isEmailExists = existingUsers.some((user) => user.email === email);

  //   if (isEmailExists) {
  //     alert("Email already registered");
  //     return;
  //   }

  //   // Add the new user to the array
  //   const newUser = { email, password };
  //   const updatedUsers = [...existingUsers, newUser];

  //   // Save the updated array to local storage
  //   localStorage.setItem("users", JSON.stringify(updatedUsers));

  //   navigate("/");
  // };

  const handleSignUp = () => {
    // Validate email and password
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    // Retrieve existing users from local storage or initialize an empty object
    const existingUsers = JSON.parse(localStorage.getItem("users")) || {};

    // Check if the email is already registered
    if (existingUsers[email]) {
      alert("Email already registered");
      return;
    }

    // Generate a unique key based on the first part of the email
    const emailParts = email.split('@');
    const firstPartOfEmail = emailParts[0];
    const newUserKey = `user_${firstPartOfEmail}`;

    // Create a new object for the user with the generated key
    const newUser = { email, password };

    // Save the new user directly to local storage with the generated key
    localStorage.setItem(newUserKey, JSON.stringify(newUser));

    // Update the existingUsers object with the new user
    existingUsers[email] = newUserKey;

    // Save the updated object of users to local storage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Clear the form fields after successful signup
    setEmail("");
    setPassword("");

    navigate("/");
  };


  return (
    <>
      <div className="form">
      <div className="bg">
        <div className="section-title">
          <div className="text">
            <img
              className="element"
              alt="Element"
              src="https://cdn.animaapp.com/projects/6582ab65240339d29b8e879c/releases/6582aefe302f82787185aac2/img/1-1433343342.png"
            />
          </div>
        </div>
        <div className="text-wrapper">
          <div className="div">
            <div className="title">Welcome Back!</div>
            <p className="subtitle">Sign-Up your Account</p>
          </div>
        </div>
        <div className="input">
          <div className="title-2">Email</div>
          <div className="textfield">
            <input className="text-2" placeholder="Enter your email" type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="input">
          <div className="title-2">Password</div>
          <div className="textfield">
            <input className="text-3" placeholder="Enter your password" type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        
        <div className="button-2">
          <button className="SignUpBtn"  onClick={handleSignUp}>
          <div className="title-wrapper">
            <div className="title-4">Sign Up</div>
          </div>
          </button>     
        </div>
      </div>
    </div>
    </>
  );
};
