import React, { useEffect, useState } from "react";
import "./ViewAllUsers.css";
import { useNavigate } from "react-router-dom";

const ViewAllUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    // Retrieve all user data from local storage
    const allUserData = Object.keys(localStorage)
      .filter((key) => key.startsWith("user"))
      .map((key) => JSON.parse(localStorage.getItem(key)));
  
    setUsers(allUserData);
  }, []);


  const handleApproveUser = (email) => {
    alert(`User ${email} approved!`);
    console.log(`User ${email} approved!`);
  };

  const handleDisapproveUser = (email) => {
    // Remove user data from local storage
    const userKey = `user_${email.split('@')[0]}`;
    localStorage.removeItem(userKey);

    // Update state to reflect the removal
    setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));

    // Alert that the user is disapproved
    alert(`User ${email} disapproved and removed!`);

    window.location.reload();
  };

  const back=()=>{
    navigate("/admin");
  };

  return (
    <div className="usersBackground">
      <h1 className="usersHeader">All Users</h1>
      
      <ul>
        {users.map((user, index) => (
          <div className="userList">
          <li key={index}>
            <strong>User:</strong> {user.email}, <strong>Password:</strong> {user.password}
            <div>
              <button onClick={() => handleApproveUser(user.email)} className="userButton">Approve</button>
              <button onClick={() => handleDisapproveUser(user.email)} className="userButton">Disapprove</button>
            </div>
          </li>
          </div>
        ))}
      </ul>
      <button className="userBackButton" onClick={back}>Back</button>
    </div>
  );
};

export default ViewAllUsers;
