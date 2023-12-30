import React, { useState } from "react";
import "./ExpertForm.css";
import { useNavigate } from "react-router-dom";

export const ExpertForm = () => {
  const navigate = useNavigate();

  const handleUpload = () => {
    // Get form data
    const expertId = document.getElementsByName("Id")[0].value;
    const expertName = document.getElementsByName("expertName")[0].value;
    const experties = document.getElementsByName("experties")[0].value;
    const price = document.getElementsByName("Price")[0].value;
    const fileInput = document.getElementsByName("fileUpd")[0];


    if (localStorage.getItem(`expertData_${expertId}`)) {
        alert("Expert ID already exists. Please change the ID.");
        return;
      }
    
    // Check if a file is selected
    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Please select a file");
      return;
    }

    // Get the selected file
    const file = fileInput.files[0];

    // Read the file as a data URL
    const reader = new FileReader();
    reader.onload = (e) => {
      // Create a new key based on expert id
      const expertKey = `expertData_${expertId}`;

      // Create an object with expert details
      const expertData = {
        Id: expertId,
        expertName,
        experties,
        price,
        profilePic: e.target.result, // Use the data URL as the profilePic
      };

      // Save expert data to localStorage
      localStorage.setItem(expertKey, JSON.stringify(expertData));

      alert("Expert details uploaded!");

      // Reset form fields
      document.getElementsByName("Id")[0].value = "";
      document.getElementsByName("expertName")[0].value = "";
      document.getElementsByName("experties")[0].value = "";
      document.getElementsByName("Price")[0].value = "";
      fileInput.value = "";

      // Optionally, you can navigate to a different page after uploading
      // navigate('/some-other-page');
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  };
  const back=()=>{
    navigate("/admin");
  };

  return (
    <>
      <div className="backgrd">
        <div className="form11">
          <div className="headerPg">
            <button className="back" onClick={back}>Back</button>Upload Expert Details
          </div>
          <div className="firstline">
            <div className="ExpertId">
              Expert Id
              <br />
              <input
                type="number"
                className="expId"
                placeholder="Enter Expert Id"
                name="Id"
              />
            </div>
            <div className="ExpName">
              Name
              <br />
              <input
                type="text"
                className="expertName"
                placeholder="Enter Expert Name"
                name="expertName"
              />
            </div>
            <div className="experties">
              Experties
              <br />
              <input
                type="text"
                className="Experties"
                placeholder="Enter the Experties"
                name="experties"
              />
            </div>
            <div className="price">
              Price
              <br />
              <input
                type="number"
                className="Price"
                placeholder="Enter price"
                name="Price"
              />
            </div>
            <div className="profilePic">
              Upload Profile Photo
              <br />
              <form className="fileUp">
                <input
                  type="file"
                  className="fileUpd"
                  name="fileUpd"
                  required
                />
              </form>
            </div>
          </div>
          <div className="btn002">
            <button className="uploadBtn2" onClick={handleUpload}>
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
