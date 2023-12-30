import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "./UserContext";



export const Login = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { login } = useContext(UserContext);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleSignUp =()=>{
   navigate ("/SignUp");

  };

  const handleForgotPass = ()=>{
    navigate("/ForgotPass");
  };

  const handleLogin = () => {
    // Retrieve users from local storage or initialize an empty array
    const users = Object.keys(localStorage)
      .filter((key) => key.startsWith("user_"))
      .map((key) => JSON.parse(localStorage.getItem(key)));
  
    // Find the user with the entered email
    const user = users.find((u) => u.email === email);
  
    if (user && user.password === password) {
      // Successful login, navigate to the admin page
      sessionStorage.setItem('user', JSON.stringify(user));
      navigate("/admin");
    } else {
      // Invalid email or password
      alert("Invalid email or password");
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
            <p className="subtitle">Login to your Admin panel</p>
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
        <div className="btn">
          <button className="btn1" onClick={handleForgotPass}>
          <div className="seconday">
            <div className="title-3">Forgot Password?</div>
          </div>
          </button>
          <button className="btn1" onClick={handleLogin}>
          <div className="primary">
            <div className="title-4">Log In</div>
          </div>
          </button>
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
