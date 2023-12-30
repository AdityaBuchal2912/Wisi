import React, { useEffect, useState } from "react";
import "./ExpertListPage.css";
import { useNavigate } from "react-router-dom";

const ExpertListPage = () => {
    const [allExperts, setAllExperts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve all jobs data from localStorage
        const expertsData = Object.keys(localStorage)
          .filter(key => key.startsWith("expertData_"))
          .map(key => JSON.parse(localStorage.getItem(key)));
    
        // Set the retrieved jobs data to state
        setAllExperts(expertsData);
      }, []);

      const handleEditExpert = (expertId) => {
        // Find the expert data based on expertId
        const expertToEdit = allExperts.find((expert) => expert.Id === expertId);
    
        // Navigate to the ExpertForm page with expert details as route state
        navigate("/expertform", { state: { expertToEdit } });
      };
    


      const handleRemoveExpert = (expertId) => {
        // Remove expert data from localStorage
        const expertKey = `expertData_${expertId}`;
        localStorage.removeItem(expertKey);
    
        // Update state to reflect the removal
        setAllExperts(prevExperts => prevExperts.filter(expert => expert.Id !== expertId));

        alert("Expert Removed");
      };

      const handleViewDetails = (expertId) => {
        navigate(`/expert-details/${expertId}`);
      };

      const back =()=>{
        navigate("/admin");
       };

  return (
    <div className="backList">
        
      <h2 className="headerList">All Experts</h2>
      <ul >
        {allExperts.map(expert => (
          <li key={expert.Id}  className="tableList">
            {/* Display job information here */}
            {expert.expertName}
            <br/><a href="" className="jobDetailList" onClick={() => handleViewDetails(expert.Id)}>View details</a>
            <div>
              {/* Edit Button */}
              <button  className="jobButton" onClick={() => handleEditExpert(expert.Id)}>
                Edit
              </button>
              {/* Reject Button */}
              <button  className="jobButton"  onClick={() => handleRemoveExpert(expert.Id)}>
                Remove
              </button>
              </div>
          </li>
        ))}
      </ul>
      <button className="anchorBack" onClick={back}>Back</button>
    </div>
  );
};

export default ExpertListPage;
