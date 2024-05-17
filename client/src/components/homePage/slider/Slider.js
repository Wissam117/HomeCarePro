import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Box} from '@mui/material';

import slider_img from "../../../assect/images/slider.jpeg";

const Slider = () => {


  return (
    <div style={{margin:"1%"}} >
        <img  src ={slider_img} width="100%" style={{ maxHeight: "400px"}}/>
        
      
    </div>
  );
};

export default Slider;