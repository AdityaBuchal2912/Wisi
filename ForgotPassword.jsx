import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    // const navigate = useNavigate();
    
    const handleGetPassword = () => {
        // Retrieve user information from local storage based on the entered email
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = storedUsers.find((u) => u.email === email);
      
        if (user && user.password) {
          alert(`Your password is: ${user.password}`);
        } else {
          alert("Email not found or password not set");
        }
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
            <p className="subtitle">Retrive your password</p>
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
        
        <div className="button-2" onClick={handleGetPassword}>
          <button className="SignUpBtn" >
          <div className="title-wrapper">
            <div className="title-4">Get Password</div>
          </div>
          </button>     
        </div>
      </div>
    </div>
    </>
  );
};
