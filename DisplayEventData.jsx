import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DisplayEventData.css";

const DisplayEventData = () => {
  const { eventId } = useParams(); // Updated to use camelCase
  const [eventData, setEventData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`Trying to retrieve data for EventId: ${eventId}`);
    const storedEventData = localStorage.getItem(`eventData_${eventId}`);

    try {
      if (storedEventData) {
        const parsedEventData = JSON.parse(storedEventData);
        console.log("Successfully retrieved event data:", parsedEventData);
        setEventData(parsedEventData);
      } else {
        console.log("Event data not found");
        navigate('/not-found');
      }
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      navigate('/error');
    }
  }, [eventId, navigate]);


  const back =()=>{
    navigate("/events");
  };
  return (
    <div className="eventDataBack">
      <h2 className="eventDataHeader">Event Details</h2>
      <div className="eventDataContent">
      <p className="eventDetailsText"><strong>Event Id:</strong> {eventData.EId}</p>
      <p className="eventDetailsText"><strong>Event Name:</strong> {eventData.eventDetails}</p>
      <p className="eventDetailsText"><strong>Uploaded By:</strong> {eventData.Name}</p>
      <p className="eventDetailsText"><strong>Email:</strong> {eventData.email}</p>
      <p className="eventDetailsText"><strong>ontact No.:</strong> {eventData.phonenumber}</p>
      <p className="eventDetailsText"><strong>Event Date:</strong> {eventData.date}</p>
      <p className="eventDetailsText"><strong>Event Time:</strong> {eventData.time}</p>
      <p className="eventDetailsText"><strong>Event Venue:</strong> {eventData.venue}</p>
      <p className="eventDetailsText"><strong>Registrartion Type:</strong> {eventData.regType}</p>
      <p className="eventDetailsText"><strong>Event Fee:</strong>  {eventData.fees}</p>
      <p className="eventDetailsText"><strong>Additional Information:</strong>  {eventData.AddInfo}</p>
      <p className="eventDetailsText"><strong>Company Name:</strong>  {eventData.CompName}</p>
      <p className="eventDetailsText"><strong>Diet Required:</strong>  {eventData.diet}</p>
      <p className="eventDetailsText"><strong>Session:</strong>  {eventData.session}</p>
      <p className="eventDetailsText"><strong>Emergancy Contact person:</strong>  {eventData.emergencyName}</p>
      <p className="eventDetailsText"><strong>Emergancy Contact Number:</strong>  {eventData.emergencyContact}</p>
      <p className="eventDetailsText"><strong>Special Request:</strong>  {eventData.spclRequest}</p>
      <p className="eventDetailsText"><strong>Accomodations:</strong>  {eventData.accomodations}</p>
      <p className="eventDetailsText"><strong> Uploaded File:</strong>  {eventData.fileUpd}</p>
      {/* Add other job details fields */}
      </div>
      <button className="backBtn" onClick={back}>Back</button>
    </div>
  );
};

export default DisplayEventData;