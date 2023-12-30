// import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AdminDashboard } from './Components/AdminDashborad';
import { Login } from './Components/login';
import { UploadPage } from './Components/UploadPage';
import { SignUp } from './Components/SignUp';
import { ForgotPassword } from './Components/ForgotPassword';
import { EventUpload } from './Components/EventUpload';
import JobDetailsPage from './Components/JobDetailsPag';
import DisplayUploadedData from './Components/DisplayUploadedData';
import DisplayEventData from './Components/DisplayEventData';
import JobListPage from './Components/JobListPage';
import EventListPage from './Components/EventListPage';
import ViewAllUsers from './Components/ViewAllUsers';
import { ExpertForm } from './Components/ExpertForm';
import ExpertListPage from './Components/ExpertListPage';
import ExpertDetailsPage from './Components/ExpertDetailsPage';





function App() {
  return (
    
    <Router>
      
      <Routes> 
     
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPass" element={<ForgotPassword />} />
        <Route path="/eventUpload" element={<EventUpload />} />
        {/* <Route path="/job-details/:id" element={<JobDetailsPage />} /> */}
        <Route path="/job-details/:jobId" element={<DisplayUploadedData />} />
        <Route path="/event-details/:eventId" element={<DisplayEventData />} />
        <Route path="/jobs" element={<JobListPage />} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/view-all-users" element={<ViewAllUsers />} />
        <Route path="/expertform" element={<ExpertForm />} />
        <Route path="/expertList" element={<ExpertListPage />} />
        <Route path="/expert-details/:id" element={<ExpertDetailsPage />} />
      </Routes>
      
    </Router> 
   
  );
}

export default App;

