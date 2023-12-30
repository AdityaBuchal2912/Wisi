import React from "react";
import "./ExpertDetailsPage.css";

const ExpertDetailsPage = () => {
  // Assuming the expertId is passed as a parameter in the URL
  const expertId = window.location.pathname.split("/").pop();
  const expertKey = `expertData_${expertId}`;
  const expertDetails = JSON.parse(localStorage.getItem(expertKey));

  if (!expertDetails) {
    // Handle the case where expertDetails is not available
    return <div>No expert details found!</div>;
  }

  return (
    <div className="expertDetailsBackground">
      <h2 className="expertDetailsHeader">Expert Details</h2>
      <div className="expertDetaisContent">
      <div>
        <strong>Expert Name:</strong> {expertDetails.expertName}
      </div>
      <div>
        <strong>Expertise:</strong> {expertDetails.experties}
      </div>
      <div>
        <strong>Price:</strong> {expertDetails.price}
      </div>
      </div>
      <div>
        <strong>Profile Picture:</strong>{" "}
        <img src={expertDetails.profilePic} alt="Profile"  className="profilePic"/>
      </div>
    </div>
   
    
  );
};

export default ExpertDetailsPage;
