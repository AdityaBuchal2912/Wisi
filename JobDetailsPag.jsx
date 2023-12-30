
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const JobDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    // Retrieve job details from local storage based on the jobId
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const details = jobs.find((job) => job.id === id);

    if (!details) {
      // If job details are not found, navigate back to the admin page
      navigate("/admin");
    }

    setJobDetails(details);
  }, [id, navigate]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="jobDetailBack">
      <h1 className="jobDetailHeader">Job Details</h1>
      <div>Title: {jobDetails.title}</div>
      <div>Description: {jobDetails.description}</div>
      {/* Add more details as needed */}
    </div>
  );
};

export default JobDetailsPage;
