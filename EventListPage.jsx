import React, { useEffect, useState } from "react";
import "./EventListPage.css";
import { useNavigate } from "react-router-dom";


const EventListPage = () => {
  // State to store all jobs data
  const [allEvents, setAllEvents] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    // Retrieve all jobs data from localStorage
    const eventsData = Object.keys(localStorage)
      .filter(key => key.startsWith("eventData_"))
      .map(key => JSON.parse(localStorage.getItem(key)));

    // Set the retrieved jobs data to state
    setAllEvents(eventsData);
  }, []);

  const handleApproveEvent = (eventId) => {
    // Check if the user is logged in
    const userData = sessionStorage.getItem('user');
    if (!userData) {
      alert('You are not logged in. Please log in to approve events.');
      return;
    }
  
    // Parse user data from sessionStorage
    const user = JSON.parse(userData);
  
    // Check if the logged-in user has the necessary credentials
    if (user.email === 'shadab@gmail.com' && user.password === 'shadab') {
      // Retrieve the event data from localStorage based on eventId
      const eventKey = `eventData_${eventId}`;
      const storedEventData = localStorage.getItem(eventKey);
  
      if (storedEventData) {
        // Update the event data (e.g., set an "approved" flag)
        const updatedEventData = { ...JSON.parse(storedEventData), approved: true };
  
        // Save the updated event data back to localStorage
        localStorage.setItem(eventKey, JSON.stringify(updatedEventData));
  
        alert("Event approved!");
      } else {
        alert("Event data not found!");
      }
    } else {
      alert('You do not have permission to approve events.');
    }
  };
  
  const handleDisapproveEvent = (eventId) => {
    // Check if the user is logged in
    const userData = sessionStorage.getItem('user');
    if (!userData) {
      alert('You are not logged in. Please log in to disapprove events.');
      return;
    }
  
    // Parse user data from sessionStorage
    const user = JSON.parse(userData);
  
    // Check if the logged-in user has the necessary credentials
    if (user.email === 'shadab@gmail.com' && user.password === 'shadab') {
      // Retrieve the event data from localStorage based on eventId
      const eventKey = `eventData_${eventId}`;
      const storedEventData = localStorage.getItem(eventKey);
  
      if (storedEventData) {
        // Remove the event data from localStorage
        localStorage.removeItem(eventKey);
        
        alert("Event disapproved and data removed!");
      } else {
        alert("Event data not found!");
      }
    } else {
      alert('You do not have permission to disapprove events.');
    }
  };

  const back =()=>{
    navigate("/admin");
   };

  return (
    <div className="backListEvent">
      <h2 className="headerListEvent">All Events</h2>
      <ul>
        {allEvents.map(event => (
          <li key={event.EId} className="tableListEvent">
            {/* Display event information here */}
            {event.eventDetails} - Submitted by {event.Name}
            <br/><a href={`/event-details/${event.EId}`}>View Details</a>
            <div>
              {/* Approve Button */}
              <button onClick={() => handleApproveEvent(event.EId)} className="eventButton">
                Approve
              </button>
              {/* Reject Button */}
              <button onClick={() => handleDisapproveEvent(event.EId)} className="eventButton">
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

export default EventListPage;
