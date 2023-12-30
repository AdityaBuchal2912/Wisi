import React, { useEffect, useState } from "react";
import "./JobListPage.css";
import { useNavigate } from "react-router-dom";

const JobListPage = () => {
  // State to store all jobs data
  const [allJobs, setAllJobs] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    // Retrieve all jobs data from localStorage
    const jobsData = Object.keys(localStorage)
      .filter(key => key.startsWith("formData_"))
      .map(key => JSON.parse(localStorage.getItem(key)));

    // Set the retrieved jobs data to state
    setAllJobs(jobsData);
  }, []);

  const handleApproveJob = (jobId) => {
    // Check if the user is logged in
    const userData = sessionStorage.getItem('user');
    if (!userData) {
      alert('You are not logged in. Please log in to approve jobs.');
      return;
    }

    // Parse user data from sessionStorage
    const user = JSON.parse(userData);

    // Check if the logged-in user has the necessary credentials
    if (user.email === 'shadab@gmail.com' && user.password === 'shadab') {
      // Retrieve the job data from localStorage based on jobId
      const jobKey = `formData_${jobId}`;
      const storedJobData = localStorage.getItem(jobKey);

      if (storedJobData) {
        // Update the job data (e.g., set an "approved" flag)
        const updatedJobData = { ...JSON.parse(storedJobData), approved: true };

        // Save the updated job data back to localStorage
        localStorage.setItem(jobKey, JSON.stringify(updatedJobData));

        alert("Job approved!");
      } else {
        
        alert("Job data not found!");
      }
    } else {
      alert('You do not have permission to approve jobs.');
    }
  };
  const handleDeleteJob = (jobId) => {
    // Check if the user is logged in
    const userData = sessionStorage.getItem('user');
    if (!userData) {
      alert('You are not logged in. Please log in to delete jobs.');
      return;
    }

    // Parse user data from sessionStorage
    const user = JSON.parse(userData);

    // Check if the logged-in user has the necessary credentials
    if (user.email === 'shadab@gmail.com' && user.password === 'shadab') {
      // Retrieve the job data from localStorage based on jobId
      const jobKey = `formData_${jobId}`;
      const storedJobData = localStorage.getItem(jobKey);

      if (storedJobData) {
      
        localStorage.removeItem(jobKey);
        alert("Job deleted!");
      } else {
       
        alert("Job data not found!");
      }
    } else {
      alert('You do not have permission to delete jobs.');
    }
  };


 const back =()=>{
  navigate("/admin");
 };

  return (
    <div className="backList">
     <h2 className="headerList">All Jobs</h2>
      
      <ul >
        {allJobs.map(job => (
          <li key={job.Id}  className="tableList">
            {/* Display job information here */}
            {job.jobTitle} - Submitted by {job.company}
            <br/><a href={`/job-details/${job.Id}`} className="jobDetailList">View details</a>
            <div>
              {/* Approve Button */}
              <button onClick={() =>handleApproveJob(job.Id)} className="jobButton">
                Approve
              </button>
              {/* Reject Button */}
              <button onClick={() =>handleDeleteJob(job.Id)} className="jobButton">
                Reject
              </button>
              </div>
          </li>
        ))}
      </ul>
      <button className="anchorBack" onClick={back}>Back</button>
    </div>
  );
};

export default JobListPage;
