import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const Footer = () => {
  

  return (
    <div  style={{backgroundColor: "darkgrey" }} >
      <Grid container spacing={2}  style={{ height: "100px", justifyContent: "center"}}>
       
        
      
        
        <Grid item xs={12} sm={12}>
          <p style={{marginLeft: "30%"}}>Copyright @ HomeCarePro Fast University Islamabad. Contact: 03481892160</p>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Footer;