import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import CustomerDashboard from './customerDashboard/CustomerDashboard';
import ServiceProviderDashboard from './serviceProviderDashboard/ServiceProviderDashboard';
import { useNavigate } from 'react-router-dom';


const Homepage = () => {

    // State to manage the visibility of About and Services sections
    const [showAbout, setShowAbout] = useState(true);
    const [showServices, setShowServices] = useState(true);
   
    // Function to toggle visibility of About and Services sections
    const toggleAbout = () => {
      setShowAbout(true);
      setShowServices(false);
    };
   
    const toggleServices = () => {
      setShowAbout(false);
      setShowServices(true);
    };
   
    const toggleAboutandServices = () => {
     setShowAbout(true);
     setShowServices(true);
   };

   const navigate = useNavigate();

   const handlelogout= () => {
     navigate("/")
   };
   
    return (
      <div>
        <div style={{display: "flex", justifyContent: "space-evenly", backgroundColor: "#7b7d7d",color: "white"}}>
            <h1> Dashboard </h1>
            <Button color="inherit" onClick={handlelogout}>LogOut</Button>    
        </div>

        <CustomerDashboard/>
        <ServiceProviderDashboard/>
        
      </div>
    );
   };
   
   export default Homepage;