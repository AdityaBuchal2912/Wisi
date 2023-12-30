import React, { useState } from "react";
import "./EventUpload.css";
import { useNavigate } from "react-router-dom";

export const EventUpload = () => {
  const navigate=useNavigate();

  const [eventData, setEventData] = useState({
    EId:"",
    Name: "",
    email: "",
    phonenumber: "",
    eventDetails: "",
    date: "",
    time: "",
    venue: "",
    regType: "Attendee",
    fees: "",
    AddInfo: "",
    CompName: "",
    diet: "Yes",
    session: "Yes",
    emergencyName: "full-time",
    emergencyContact: "",
    spclRequest: "fresher",
    accomodations: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    // If the input is a file, update the 'file' property in the state
    if (type === "file") {
      setEventData({
        ...eventData,
        file: e.target.files[0],
      });
    } else {
      setEventData({
        ...eventData,
        [name]: value,
      });
    }
  };

  const back =()=>{
    navigate("/admin");
  };

  const handleUpload = () => {
    const key = `eventData_${eventData.EId}`;

    if (localStorage.getItem(key)) {
      alert("Please change the Id, as it already exists.");
      return;
    }

    const formData = new FormData();
    formData.append("file", eventData.file); 

    // Append other event data properties to FormData
    Object.entries(eventData).forEach(([key, value]) => {
      if (key !== "file" && key !== "EId") {
        formData.append(key, value);
      }
    });

    localStorage.setItem(key, JSON.stringify(Object.fromEntries(formData)));

    alert("Data uploaded successfully!!");
    console.log("Event Data:", eventData);

    // Clear form fields
    setEventData({
      EId: "",
      Name: "",
      email: "",
      phonenumber: "",
      eventDetails: "",
      date: "",
      time: "",
      venue: "",
      regType: "Attendee",
      fees: "",
      AddInfo: "",
      CompName: "",
      diet: "Yes",
      session: "Yes",
      emergencyName: "full-time",
      emergencyContact: "",
      spclRequest: "",
      accomodations: "",
      file: null,
    });
    navigate("/admin");
  };


  return (
    
    <>
    <div className="backgrd">
        <div className="form01">
            <div className="headerPg">
                <button className="back" onClick={back}>Back</button>What job do you want to post?
            </div>
        <div className="firstline">
        <div className="name">Name
        <br/><input type="text" className="nameText" name="Name" placeholder="Enter Name"
        value={eventData.Name}
        onChange={handleInputChange}
        />
        </div>
        <div className="emailEvent">Email
        <br/><input type="text" className="email" name="email" placeholder="Enter email"
        value={eventData.email}
        onChange={handleInputChange}/>
        </div>
        <div className="number">Phone number
        <br/><input type="number" className="phnNumber" name="phonenumber" placeholder="Enter phone number"
        value={eventData.phonenumber}
        onChange={handleInputChange}/>
        </div> 
        
        </div>
        <div className="SecondLine">
        <div className="eventDetails">Event Name
        <br/><input type="text" className="eventText" name="eventDetails" placeholder="Enter event details"
        value={eventData.eventDetails}
        onChange={handleInputChange}/>
        </div> 
        <div className="eventDate">Event Date
        <br/><input type="date" className="Date" name="date" placeholder="Enter event date"
        value={eventData.date}
        onChange={handleInputChange}/>
        </div> 
        <div className="eventTime">Event Time
        <br/><input type="time" className="time" name="time" placeholder="Enter event time"
        value={eventData.time}
        onChange={handleInputChange}/>
        </div> 
        <div className="eventVenue">Event Venue
        <br/><input type="text" className="venue" name="venue" placeholder="Enter event venue"
        value={eventData.venue}
        onChange={handleInputChange}/>
        </div>
        </div>
        <div className="ThirdLine">
        
        <div className="regType">
          Registration Type
          <br />
          <select className="type" name="regType"
          value={eventData.regType}
          onChange={handleInputChange}>
            <option value="fresher">Attendee</option>
            <option value="midLevel">Speaker</option>
            <option value="seniorLevel">Sponserer</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="regFee">Registration fee
        <br/><input type="number" className="fee" name="fees" placeholder="Enter fee"
        value={eventData.fees}
        onChange={handleInputChange}/>
        </div>
        <div className="addInfo">Additional Information
        <br/><input type="text" className="info" name="AddInfo" placeholder="Enter Additional Information"
        value={eventData.AddInfo}
        onChange={handleInputChange}/>
        </div>
        </div>
        <div className="forthLine">
            <div className="affComp">Affiliation or Company Name
            <br/><input type="text" className="CompNameAff" name="CompName" placeholder="Enter Affliation or Company name"
            value={eventData.CompName}
            onChange={handleInputChange}/>
            </div>
        </div>
        <div className="fifthLine">
        <div className="diet">
        Dietary preferences (for catering purposes)
          <br />
          <select className="dietBtn" name="diet" value={eventData.diet}
            onChange={handleInputChange}>
          
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="session">
        Session preferences (if applicable)
          <br />
          <select className="sessionBtn" name="session"
          value={eventData.session}
          onChange={handleInputChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        </div>
        <div className="sixthLine">
        <div className="EmerPerson">Emergency Contact person
            <br/><input type="text" className="personText" name="emergencyName" placeholder="Enter Name"
            value={eventData.emergencyName}
            onChange={handleInputChange}/>
        </div>
        <div className="EmerContact">Emergency Contact number
            <br/><input type="number" className="contactText" name="emergencyContact" placeholder="Enter Number"
            value={eventData.emergencyContact}
            onChange={handleInputChange}/>
        </div>
        <div className="SpclReq">Special Request
            <br/><input type="text" className="request" name="spclRequest" placeholder="Enter request"
            value={eventData.spclRequest}
            onChange={handleInputChange}/>
        </div>
        <div className="SpclAccomodations">Special Accomodations
            <br/><input type="text" className="accomodations" name="accomodations" placeholder="Enter required accomodations"
            value={eventData.accomodations}
            onChange={handleInputChange}/>
        </div>
        <div className="fileUpload">File Upload
            <br/><form className="fileUp">
            <input
            type="file"
            
            className="fileUpd"
            name="fileUpd"
            
            onChange={handleInputChange}
            required
          />
              
             </form>
        </div>
        <div className="eventId" >Event Id
            <br/><input
                  type="number" 
                  className="eventIdText"
                  placeholder="Enter Event Id"
                  name="EId"
                  value={eventData.EId}
                  onChange={handleInputChange}
                  />
        </div>
        </div>
        <div className="lastLine">
            <div className="btn01">
            <button className="uploadBtn1" onClick={handleUpload}>Upload</button>
            </div>
        </div>
    </div>
    </div>
    </>
  );
};