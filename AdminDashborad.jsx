import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom';




export const AdminDashboard = () => {
    const navigate = useNavigate();
    const [jobUploadInput, setJobUploadInput] = useState("");
    const [eventUploadInput, setEventUploadInput] = useState("");
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [job1Data, setJob1Data] = useState({});
    const [job2Data, setJob2Data] = useState({});
    const [event1Data, setEvent1Data] = useState({});
    const [event2Data, setEvent2Data] = useState({});
    const [user1Email, setUser1Email] = useState("");
    const [user2Email, setUser2Email] = useState("");
    const [user1Data, setUser1Data] = useState({});
    const [user2Data, setUser2Data] = useState({});

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    alert("Do you want to log out?");
    navigate('/');
  };
  
  useEffect(() => {
    // Check if user is logged in when component mounts
    const userData = sessionStorage.getItem('user');
    if (!userData) {
      // Redirect to login if not logged in
      navigate('/');
    }
  }, []);

  useEffect(() => {
    // Retrieve data for Event 1 from localStorage
    const user1Key = "user_aditya";
    const storedUser1Data = localStorage.getItem(user1Key);
    if (storedUser1Data) {
      setUser1Data(JSON.parse(storedUser1Data));
    }
  
    // Retrieve data for Event 2 from localStorage
    const user2Key = "user_shadab";
    const storedUser2Data = localStorage.getItem(user2Key);
    if (storedUser2Data) {
      setUser2Data(JSON.parse(storedUser2Data));
    }
  }, []);


  const handleJobUpload = () => {
    
    console.log("Uploading job:", jobUploadInput);
    // Clear the input field after handling the upload
    setJobUploadInput("");
    navigate('/upload');
  };

  const handleEventUpload = () => {
    // Handle event upload logic here
    
    navigate('/eventUpload');
  };

  const handleExpertUpload =() =>{
    navigate("/expertform")
  }

  
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


  

  const handleSearchJobs = () => {
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    // Filter jobs based on partial match of job title
    const filteredJobs = jobs.filter(job =>
      job.jobTitle.toLowerCase().includes(jobUploadInput.toLowerCase())
    );

    if (filteredJobs.length > 0) {
      // Set the filtered jobs to state
      setFilteredJobs(filteredJobs);
      // Navigate to the "/jobs" page and pass the filtered jobs data
      navigate("/jobs", { state: { filteredJobs } });
    } else {
      // Show a popup indicating job title not found
      alert("Job title not found!");
    }
  };

  useEffect(() => {
    // Retrieve data for Job 1 from localStorage
    const job1Key = "formData_505"; // Replace "1" with the specific Id for Job 1
    const storedJob1Data = localStorage.getItem(job1Key);
    if (storedJob1Data) {
      setJob1Data(JSON.parse(storedJob1Data));
    }

    // Retrieve data for Job 2 from localStorage
    const job2Key = "formData_509"; // Replace "2" with the specific Id for Job 2
    const storedJob2Data = localStorage.getItem(job2Key);
    if (storedJob2Data) {
      setJob2Data(JSON.parse(storedJob2Data));
    }
    
  }, []);


  useEffect(() => {
    // Retrieve data for Event 1 from localStorage
    const event1Key = "eventData_111";
    const storedEvent1Data = localStorage.getItem(event1Key);
    if (storedEvent1Data) {
      setEvent1Data(JSON.parse(storedEvent1Data));
    }
  
    // Retrieve data for Event 2 from localStorage
    const event2Key = "eventData_135";
    const storedEvent2Data = localStorage.getItem(event2Key);
    if (storedEvent2Data) {
      setEvent2Data(JSON.parse(storedEvent2Data));
    }
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
 

  const handleViewAllJobs = () => {
    const userData = sessionStorage.getItem('user');
    if (!userData) {
      alert('You are not logged in. Please log in to view all jobs.');
      return;
    }
    const user = JSON.parse(userData);

    // Check if the logged-in user has the necessary credentials
    if (user.email === 'shadab@gmail.com' && user.password === 'shadab') {
      // Authorized user, navigate to the view all jobs page
      navigate('/jobs');
    } else {
      alert('You do not have permission to view all jobs.');
    }
  };

  const handleViewAllEvents = () => {
    // Check if the user is logged in
    const userData = sessionStorage.getItem('user');
    if (!userData) {
      alert('You are not logged in. Please log in to view all events.');
      return;
    }

    // Parse user data from sessionStorage
    const user = JSON.parse(userData);

    // Check if the logged-in user has the necessary credentials
    if (user.email === 'shadab@gmail.com' && user.password === 'shadab') {
      // Authorized user, navigate to the view all events page
      navigate('/events');
    } else {
      alert('You do not have permission to view all events.');
    }
  };


  useEffect(() => {

    // Additional code to retrieve user data from local storage
    const userDataArray = Object.values(localStorage)
      .filter((key) => key.startsWith("user"))
      .map((key) => JSON.parse(localStorage.getItem(key)));

    // Use the first two user emails for display
    if (userDataArray.length >= 1) {
      // Set the first part of the email for the first user
      setUser1Email(userDataArray[0].email.split('@')[0]);
    }

    if (userDataArray.length >= 2) {
      // Set the first part of the email for the second user
      setUser2Email(userDataArray[1].email.split('@')[0]);
    }
  }, []);



  const handleApproveUser = (userEmail) => {
    // Check if the user is logged in
    const userData = sessionStorage.getItem('user');
    if (!userData) {
      alert('You are not logged in. Please log in to approve users.');
      return;
    }
  
    // Parse user data from sessionStorage
    const user = JSON.parse(userData);
  
    // Check if the logged-in user has the necessary credentials
    if (user.email === 'shadab@gmail.com' && user.password === 'shadab') {
      // Retrieve the user data from localStorage based on the first part of the userEmail
      const userKey = `user_${userEmail.split('@')[0]}`;
      const storedUserData = localStorage.getItem(userKey);
  
      if (storedUserData) {
        // Update the user data (e.g., set an "approved" flag)
        const updatedUserData = { ...JSON.parse(storedUserData), approved: true };
  
        // Save the updated user data back to localStorage
        localStorage.setItem(userKey, JSON.stringify(updatedUserData));
  
        alert("User approved!");
      } else {
        alert("User data not found!");
      }
    } else {
      alert('You do not have permission to approve users.');
    }
  };
  
  const handleDisapproveUser = (userEmail) => {
    // Check if the user is logged in
    const userData = sessionStorage.getItem('user');
    if (!userData) {
      alert('You are not logged in. Please log in to disapprove users.');
      return;
    }
  
    
    const user = JSON.parse(userData);
  
    // Check if the logged-in user has the necessary credentials
    if (user.email === 'shadab@gmail.com' && user.password === 'shadab') {
      // Retrieve the user data from localStorage based on the first part of the userEmail
      const userKey = `user_${userEmail.split('@')[0]}`;
      const storedUserData = localStorage.getItem(userKey);
  
      if (storedUserData) {
        // Remove the user data from localStorage
        localStorage.removeItem(userKey);
  
        alert("User disapproved and data removed!");
      } else {
        alert("User data not found!");
      }
    } else {
      alert('You do not have permission to disapprove users.');
    }
  };
 

  const handleViewAllExperts = () => {
    // Check if the user is logged in
    const userData = sessionStorage.getItem('user');
    if (!userData) {
      alert('You are not logged in. Please log in to view all events.');
      return;
    }

    // Parse user data from sessionStorage
    const user = JSON.parse(userData);

    // Check if the logged-in user has the necessary credentials
    if (user.email === 'shadab@gmail.com' && user.password === 'shadab') {
      // Authorized user, navigate to the view all events page
      navigate('/expertList');
    } else {
      alert('You do not have permission to view all events.');
    }
  };


  return (
    <div className="index">
      <div className="top-bar">
        <img
          className="element"
          alt="Element"
          src="https://cdn.animaapp.com/projects/6582ab65240339d29b8e879c/releases/6582aefe302f82787185aac2/img/1-1433343342.png"
        />
        <div className="title">Wisi Tribe Admin Panel</div>
      </div>
      <div className="sidebar">
        <div className="item">
          <div className="frame">
            <div className="icon">📂</div>
          </div>
          <div className="text-wrapper"><a href="#updJob" className="sidebtn">Upload Job</a></div>
        </div>
        <div className="item">
          <div className="frame">
            <div className="icon">📅</div>
          </div>
          <div className="text-wrapper"><a href="#updEvent" className="sidebtn">Upload Events</a></div>
        </div>
      </div>
      <div className="section">
        <div className="avatar">
          <img
            className="img"
            alt="Element"
            src="https://cdn.animaapp.com/projects/6582ab65240339d29b8e879c/releases/6582aefe302f82787185aac2/img/1-1433343342.png"
          />
        </div>
        <div className="container">
          <div className="div">Admin</div>
          <div className="selection">
            <div className="label-normal">
              <div className="label-text">Super Admin</div>
            </div>
          </div>
          <div className="description">Logged in as Admin</div>
        </div>
        <button className="button" onClick={handleLogout}>
          <div className="seconday">
            <div className="title-2">Logout</div>
          </div>
        </button>
        <img
          className="vector"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/6582ab65240339d29b8e879c/releases/6582c0d37ccfca44893b0d01/img/vector-200.svg"
        />
      </div>
      <div className="section-2" id="updJob">
        <div className="container-2">
          <div className="title-3">Upload Jobs</div>
          <div className="input">
          <input
              type="search"
              placeholder="Search the job"
              className="textfield"
              value={jobUploadInput}
              onChange={(e) => setJobUploadInput(e.target.value)}
            />
            </div>
          
          <div className="button-2">
          <button className="button" onClick={handleSearchJobs}>
              <div className="title-wrapper">
                <div className="title-4">Search</div>
              </div>
            </button>
            <button className="button" onClick={handleJobUpload}>
            <div className="primary">
              <div className="title-2">Upload</div>
            </div>
            </button>
          </div>
        </div>
       
        <img
          className="vector-2"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/6582ab65240339d29b8e879c/releases/6582c0d37ccfca44893b0d01/img/vector-200.svg"
        />
      </div>
      <div className="section-3">
        <div className="div-wrapper">
          <div className="title-5">Pending Jobs</div>
          <a href="" className="viewAll" onClick={handleViewAllJobs}>View All Jobs</a>
        </div>
        <div className="list">
        
          <div className="row" >
            <div className="article">
              <div className="image-container">
                <div className="image" />
              </div>
              <div className="frame-2">
                <div className="title-6">{job1Data.jobTitle}</div>
                <div className="subtitle">Submitted by {job1Data.company}</div>
                <div className="subtitle-2"><a href={`/job-details/${job1Data.Id}`} className="JobDetails">Job details</a></div>
                <div className="user">
                  <div className="icon-buttons">
                    <a className="icon-2" href="" onClick={() => handleApproveJob(job1Data.Id)}>✅</a>
                    <a className="icon-2" href="" onClick={() => handleDeleteJob(job1Data.Id)}>❌</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          
          <div className="row" >
            <div className="article">
              <div className="image-container">
                <div className="image" />
              </div>
              <div className="frame-2">
                <div className="title-6">{job2Data.jobTitle}</div>
                <div className="subtitle">Submitted by User {job2Data.company}</div>
                <div className="subtitle-2"><a href={`/job-details/${job2Data.Id}`} className="JobDetails">Job details</a></div>
                <div className="user">
                  <div className="icon-buttons">
                    <a className="icon-2" href="" onClick={() => handleApproveJob(job2Data.Id)} >✅</a>
                    <a className="icon-2" href="" onClick={() => handleDeleteJob(job2Data.Id)}>❌</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <img
          className="vector-3"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/6582ab65240339d29b8e879c/releases/6582c0d37ccfca44893b0d01/img/vector-200.svg"
        />
      </div>
      <div className="section-2" id="updEvent">
        <div className="container-2">
          <div className="title-3">Upload Events</div>
          <div className="input">
          <input
              type="search"
              placeholder="Search the job"
              className="textfield"
              value={jobUploadInput}
              onChange={(e) => setJobUploadInput(e.target.value)}
            />
            </div>
          <div className="button-2">
          <button className="button" onClick={handleSearchJobs}>
            <div className="title-wrapper">
              <div className="title-4">Search</div>
            </div>
            </button>

            <button className="button" onClick={handleEventUpload}>
            <div className="primary">
              <div className="title-2">Upload</div>
            </div>
            </button>
          </div>
          
        </div>
        <img
          className="vector-2"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/6582ab65240339d29b8e879c/releases/6582c0d37ccfca44893b0d01/img/vector-200.svg"
        />
      </div>
      <div className="section-4">
        <div className="div-wrapper">
          <div className="title-7">Pending Events</div>
          <a href="" className="viewAll" onClick={handleViewAllEvents}>View All Events</a>
        </div>
        <div className="list">
          <div className="row">
            <div className="article">
              <div className="image-container">
                <div className="image" />
              </div>
              <div className="frame-2">
                <div className="title-6">{event1Data.eventDetails}</div>
                <div className="subtitle">Submitted by {event1Data.Name}</div>
                <div className="subtitle-2"><a href={`/event-details/${event1Data.EId}`} className="event">Event details</a></div>
                <div className="user">
                  <div className="icon-buttons">
                    <a className="icon-2" href="" onClick={() => handleApproveEvent(event1Data.EId)}>✅</a>
                    <a className="icon-2" href="" onClick={() => handleDisapproveEvent(event1Data.EId)}>❌</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="article">
              <div className="image-container">
                <div className="image" />
              </div>
              <div className="frame-2">
                <div className="title-6">{event2Data.eventDetails}</div>
                <div className="subtitle">Submitted by {event2Data.Name}</div>
                <div className="subtitle-2"><a href={`/event-details/${event2Data.EId}`} className="event">Event details</a></div>
                <div className="user">
                  <div className="icon-buttons">
                    <a className="icon-2" href="" onClick={() => handleApproveEvent(event2Data.EId)}>✅</a>
                    <a className="icon-2" href="" onClick={() => handleDisapproveEvent(event2Data.EId)}>❌</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="vector-3"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/6582ab65240339d29b8e879c/releases/6582c0d37ccfca44893b0d01/img/vector-200.svg"
        />
      </div>
      <div className="section-5">
        <div className="div-wrapper">
          <div className="title-8">Pending Users</div>
          <a href="/view-all-users" className="viewAllUsers" >View All Users</a>
        </div>
        <div className="list">
          <div className="row">
            <div className="article">
              <div className="image-container">
                <div className="image" />
              </div>
              <div className="frame-2">
               <div className="title-6">{user1Data.email}</div>
                <div className="subtitle">Submitted by User name</div>
                <div className="subtitle-2"><a href="" className="event">User details</a></div>
                <div className="user">
                  <div className="icon-buttons">
                    <a className="icon-2" href="" onClick={() => handleApproveUser(user1Data.email)}>✅</a>
                    <a className="icon-2" href="" onClick={() => handleApproveUser(user1Data.email)}>❌</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="article">
              <div className="image-container">
                <div className="image" />
              </div>
              <div className="frame-2">
                <div className="title-6">{user2Data.email}</div>
                <div className="subtitle">Submitted by user name</div>
                <div className="subtitle-2"><a href="" className="event">User details</a></div>
                <div className="user">
                  <div className="icon-buttons">
                    <a className="icon-2" href="" onClick={() => handleApproveUser(user2Data.email)}>✅</a>
                    <a className="icon-2" href="" onClick={() => handleDisapproveUser(user2Data.email)}>❌</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="vector-3"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/6582ab65240339d29b8e879c/releases/6582c0d37ccfca44893b0d01/img/vector-200.svg"
        />
      </div>
      
      <div className="section-6">
      <div className="div-wrapper">
        <div className="title-8">Expert Section</div>
        <a href="" className="viewAllUsers" onClick={handleViewAllExperts} >View All Experts</a>
      </div>
      <div className="expertUpload">
        <button className="experBtn" onClick={handleExpertUpload }>Upload Expert</button>
      </div>
      <img
        className="vector-3"
        alt="Vector"
        src="https://cdn.animaapp.com/projects/6582ab65240339d29b8e879c/releases/6582c0d37ccfca44893b0d01/img/vector-200.svg"
      />
    </div>
    
    </div>
  );
};
