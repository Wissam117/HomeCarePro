import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Box } from '@mui/material';
import cleaningImg from "../../../assect/images/cleaning.jpeg";
import reparingImg from "../../../assect/images/reparing.jpeg";
import homesecurityImg from "../../../assect/images/homesecurity.jpeg";
import './style.css';



const Services = () => {


    return (


        <div>
            <h1 style={{marginLeft: "8%"}}>Services</h1>
            <div className="image-gallery" >

                <div >
                    <img src={cleaningImg} alt="Image 1" />
                    <p style={{ width: "500px", textAlign: "justify", marginLeft: "15px" }}> HOMECAREPRO, our providers  provide top-tier cleaning services
                        to maintain immaculate environments for both residential and commercial
                        properties. Our dedicated team uses eco-friendly products and advanced techniques
                        to ensure thorough cleaning and sanitation. We prioritize your health and comfort,
                        offering customizable solutions to meet your specific needs. Trust us for a spotless space every time.</p>
                </div>

                <div>
                    <img src={reparingImg} alt="Image 2" />
                    <p style={{ width: "500px", textAlign: "justify", marginLeft: "15px" }}>
                        HOMECAREPRO offers comprehensive home repair services, ensuring your residence remains in optimal condition.
                        Our skilled professionals specialize in plumbing, electrical work, and general maintenance. We guarantee efficient,
                        reliable solutions with a focus on quality and customer satisfaction. Trust us to handle your home repair needs with
                        expertise and care.</p>

                </div>
                <div><img src={homesecurityImg} alt="Image 3" />
                    <p style={{ width: "500px", textAlign: "justify", marginLeft: "15px" }}>
                        HOMECAREPRO Providers offers robust home security solutions to ensure your safety and peace of mind. Our services include
                        state-of-the-art alarm systems, CCTV installations, and smart home integrations. With round-the-clock monitoring and rapid
                        response capabilities, we safeguard your home against any security threats. Trust us to keep your family and property secure.</p>
                </div>

            </div>
        </div>


    );
};

export default Services;