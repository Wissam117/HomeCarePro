import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import Navbar from "../navBar/Navbar";

const SignupForm = ({toggleSignin}) => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
    userType: '',
    password: '',
    confirmPassword: '',
  });

  // Function to handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic (optional, can be improved with libraries like yup)
    if (!formData.userName || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all required fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // Replace with your actual API endpoint URL
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || 'Signup failed. Please try again.');
        return;
      }

      console.log('Signup successful!');
      // Handle successful signup (e.g., clear form, redirect)
      setFormData({
        userName: '',
        email: '',
        phoneNumber: '',
        userType: '',
        password: '',
        confirmPassword: '',
      });
      alert('Signup successful!');
      toggleSignin();
    } catch (err) {
      console.error('Signup error:', err);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div  style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} >
        
      <Grid container spacing={2}  style={{ width: "500px", justifyContent: "center"}}>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Username"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel>User Type</InputLabel>
            <Select
              value={formData.userType}
              onChange={handleChange}
              name="userType"
            >
              <MenuItem value="serviceProvider">Service Provider</MenuItem>
              <MenuItem value="client">Client</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth= "true" onClick={handleSubmit} style={{ backgroundColor: '#A8A8A8' }}>Sign Up</Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          <p>If Already Registered! Please Sign In</p>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button variant="contained" color="primary" fullWidth= "true" onClick={toggleSignin} style={{ backgroundColor: '#A8A8A8' }}>Sign In</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignupForm;