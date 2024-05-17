import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import Navbar from '../navBar/Navbar';
import Footer from '../footer/Footer';
import Slider from './slider/Slider';
import Services from './services/Services';
import About from './about/About';

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

 return (
   <div>
     <Navbar toggleAbout={toggleAbout} toggleServices={toggleServices} toggleAboutandServices = {toggleAboutandServices}/> {/* Pass toggle functions to Navbar */}
     <Slider />
     {showAbout && <About />} {/* Render About section if showAbout is true */}
     {showServices && <Services />} {/* Render Services section if showServices is true */}
     <Footer />
   </div>
 );
};

export default Homepage;