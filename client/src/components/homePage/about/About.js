import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Box } from '@mui/material';

import servicesImage from "../../../assect/images/services.jpeg";
import './style.css';



const About = () => {


    return (
        
            
        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "10%", marginRight: "10%", marginTop: "1%", marginBottom: "1%" }}>
        <div style={{ width: "100%", textAlign: "justify" }}>
          <h1>About Us</h1>
          <p>HomecarePro offers a comprehensive range of online services tailored to meet the diverse needs of both residential and commercial clients. With a steadfast commitment to excellence, we specialize in three core areas: cleaning, repairing, and security solutions for homes and offices.

When it comes to cleaning services, HomecarePro prides itself on delivering unmatched quality and reliability. Our team of experienced professionals utilizes advanced cleaning techniques and eco-friendly products to ensure that your space is not only spotless but also safe and healthy. Whether you require regular maintenance cleaning, deep cleaning, or specialized services like carpet or upholstery cleaning, HomecarePro has you covered. We understand that cleanliness is essential for creating a welcoming and productive environment, and we strive to exceed your expectations with every service.

In addition to cleaning, HomecarePro offers expert repairing services to address any issues or damages within your property promptly. From minor repairs like fixing leaky faucets or repairing electrical fixtures to major renovations, our skilled technicians have the knowledge and expertise to handle it all. We prioritize efficiency and craftsmanship in every project we undertake, ensuring that your home or office remains in optimal condition. With HomecarePro, you can trust that your repair needs will be addressed promptly and effectively, allowing you to enjoy a hassle-free experience.</p>
        </div>
        <div style={{ width: "100%" }}>
          <img src={servicesImage} alt="Image 3" style={{ width: "100%", height: "auto", marginTop: "3%" }} />
        </div>
      </div>
           
       
    );
};

export default About;