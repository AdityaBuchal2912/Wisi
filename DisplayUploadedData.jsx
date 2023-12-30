// import React, { useEffect, useState } from "react";

// const DisplayUploadedData = () => {
//   const [formData, setFormData] = useState({}); 

//   useEffect(() => {
//     // Retrieve data from local storage
//     const storedData = JSON.parse(localStorage.getItem("formData")) || {};
//     setFormData(storedData);
//   }, []);

//   return (
//     <div>
//       <h2>Uploaded Job Data</h2>
//       
//       {Object.keys(formData).map((key, index) => (
//         <div key={index} className="uploaded-data">
//           <p>
//             <strong>{key}:</strong> {formData[key]}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DisplayUploadedData;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DisplayUploadedData.css";

const DisplayUploadedData = () => {
  const { jobId } = useParams();
  const [jobData, setJobData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve data for the specified job from localStorage
    const storedJobData = localStorage.getItem(`formData_${jobId}`);
    
    try {
      if (storedJobData) {
        // Parse the JSON string to an object
        const parsedJobData = JSON.parse(storedJobData);
        setJobData(parsedJobData);
      } else {
        // If job data is not found, you can redirect to another page or handle it as needed
        navigate('/not-found');
      }
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      // Handle the error, e.g., redirect to an error page
      navigate('/error');
    }
  }, [jobId, navigate]);


  const back =()=>{
    navigate("/jobs");
  };

  return (
    <div className="jobDetailsBack"> 
      <h2 className="jobDetailsHeader">Job Details</h2>
      <div className="jobDetailContent">
      <p className="jobDetailCon"><strong> Job id:</strong>  {jobData.Id}</p>
      <p className="jobDetailCon"><strong>Job Title:</strong>  {jobData.jobTitle}</p>
      <p className="jobDetailCon"><strong>Company:</strong>  {jobData.company}</p>
      
      <p className="jobDetailCon"><strong>Location:</strong>  {jobData.location}</p>
      <p className="jobDetailCon"><strong>Job Functions:</strong>  {jobData.jobFunctions}</p>
      <p className="jobDetailCon"><strong>Employment Type:</strong>  {jobData.empType}</p>
      <p className="jobDetailCon"><strong>Industry:</strong>  {jobData.compIndustry}</p>
      <p className="jobDetailCon"><strong>Seniority Level:</strong>  {jobData.seniorityLevel}</p>
      <p className="jobDetailCon"><strong>Job Description:</strong>  {jobData.jobDescription}</p>
      <p className="jobDetailCon"><strong>Skills:</strong>  {jobData.skills}</p>
      </div>
      
      <button className="backBtn" onClick={back}>Back</button>
    </div>
  );
};

export default DisplayUploadedData;
