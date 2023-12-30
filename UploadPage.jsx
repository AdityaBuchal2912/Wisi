import React, { useState } from "react";
import "./UploadPage.css";
import { Navigate, useNavigate } from "react-router-dom";

export const UploadPage = () => {
  const navigate = useNavigate();  

  const [formData, setFormData] = useState({
    Id: "",
    company: "",
    jobTitle: "",
    location: "",
    jobFunctions: "",
    empType: "full-time",
    compIndustry: "",
    seniorityLevel: "fresher",
    jobDescription: "",
    skills: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpload = () => {
    // Generate a unique key 
    const key = `formData_${formData.Id}`;

    if (localStorage.getItem(key)) {
      // If the key already exists, display an alert and don't proceed
      alert("Please change the Id, as it already exists.");
      return;
    }

    // Store data in local storage with the unique key
    localStorage.setItem(key, JSON.stringify(formData));
    alert("Data uploaded successfully !!");
    // Log data to console
    console.log("Form Data:", formData);

    // Clear form fields
    setFormData({
      Id: "",
      company: "",
      jobTitle: "",
      location: "",
      jobFunctions: "",
      empType: "full-time",
      compIndustry: "",
      seniorityLevel: "fresher",
      jobDescription: "",
      skills: "",
    });
    navigate("/admin");
  };





  const back =()=>{
    navigate("/admin");
  };

  return (
    
    <>
    <div className="backgrd">
        <div className="form1">
            <div className="headerPg">
                <button className="back" onClick={back}>Back</button>What job do you want to post?
            </div>
        <div className="firstline">
        <div className="jobId">Job Id
        <br/><input
                type="number"
                className="jId"
                placeholder="Enter Job Id"
                name="Id"
                value={formData.Id}
                onChange={handleInputChange}
              />
        </div>
        <div className="company">Company
        <br/><input
                type="text"
                className="companyText"
                placeholder="Enter company Name"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />
        </div>
        <div className="titleJob">Job Title
        <br/><input
                type="text"
                className="job"
                placeholder="Enter job Title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
              />
        </div>
        <div className="location">Location
        <br/><input
                type="text"
                className="locationText"
                placeholder="Enter Location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
        </div> 
        </div>
        <div className="SecondLine">
        <div className="jobFunctions">Job functions (select upto 3)
        <br/><input
                type="text"
                className="addJobFunct"
                placeholder="+ Add Functions"
                name="jobFunctions"
                value={formData.jobFunctions}
                onChange={handleInputChange}
              />
        </div>
        <div className="empType">
          Employment Type
          <br />
          <select
                className="empTypeBtn"
                name="empType"
                value={formData.empType}
                onChange={handleInputChange}
              >
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
                {/* Add more options as needed */}
              </select>
        </div>
        </div>
        <div className="ThirdLine">
        <div className="compIndustry">Company Industry (select upto 3)
        <br/><input
      type="text"
      className="addIndustry"
      placeholder="+ Add Industry"
      name="compIndustry"
      value={formData.compIndustry}
      onChange={handleInputChange}
    />
        </div>
        <div className="seniority">
          Seniority Level
          <br />
          <select
      className="seniorityBtn"
      name="seniorityLevel"
      value={formData.seniorityLevel}
      onChange={handleInputChange}
    >
      <option value="fresher">Fresher</option>
      <option value="midLevel">1-5 years</option>
      <option value="seniorLevel">5+ years</option>
      {/* Add more options as needed */}
    </select>
        </div>
        </div>
        <div className="forthLine">
            <div className="jobDescription">Job Description
            <br/><input
      type="text"
      className="JDText"
      placeholder="Enter the Job description"
      name="jobDescription"
      value={formData.jobDescription}
      onChange={handleInputChange}
    />
            </div>
        </div>
        <div className="fifthLine">
            <div className="Skills">Add skill keywords to make your job more visible to right candidates
( select up to 10 )
            <br/><input
      type="text"
      className="skillText"
      placeholder="+ Add Skills"
      name="skills"
      value={formData.skills}
      onChange={handleInputChange}
    />
            </div>
        </div>
        <div className="lastLine">
            <div className="btn001">
            <button className="uploadBtn01" onClick={handleUpload}>Upload</button>
            </div>
        </div>
    </div>
    </div>
    </>
  );
};
