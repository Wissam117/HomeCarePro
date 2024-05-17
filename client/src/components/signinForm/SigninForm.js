import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import SignupForm from '../signupForm/SignupForm';
import { useNavigate } from 'react-router-dom';

const SigninForm = () => {

 const [showSignin, setShowSignin] = useState(true);
 const [showSignup, setShowSignup] = useState(false);

  const [formData, setFormData] = useState({
   
    email: '',
    password: '',
   
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your backend API endpoint URL
      const url = 'http://localhost:5000/signin';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Set content type for JSON data
        },
        body: JSON.stringify(formData) // Convert form data to JSON
      });

      const data = await response.json(); // Parse response as JSON

      if (data.message === 'Login successful!') {
        // Handle successful login (e.g., redirect, set session/token)
        console.log('Login successful!');
        navigate("/dashboard");

        // ... your login logic here
      } else {
        console.error('Login error:', data.message);
        // Handle login errors (e.g., display error message)
        alert(data.message)
      }
    } catch (err) {
      console.error('Signin API error:', err);
      // Handle API errors (e.g., display error message)
    }
  };

  const toggleSignin = () => {
    setShowSignin(true);
    setShowSignup(false);
  };

  const toggleSignup = () => {
    setShowSignin(false);
    setShowSignup(true);
  };

  return (
    <div>
    {showSignin &&
    <div  style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} >
      <Grid container spacing={2}  style={{ width: "30%", justifyContent: "center"}}>
       
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
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Grid>
      
        
        <Grid item xs={12} sm={12}>
          <p>Provide your credential to login</p>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth= "true" onClick={handleSubmit} style={{ backgroundColor: '#A8A8A8' }}>Sign In</Button>
        </Grid>

        <Grid item xs={12} sm={12}>
          <p>If Not registered! Click Sign Up Button</p>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth= "true" onClick={toggleSignup} style={{ backgroundColor: '#A8A8A8' }}>Sign Up</Button>
        </Grid>
      </Grid>
    </div>
    }
    {showSignup && <SignupForm toggleSignin={toggleSignin} />}
    </div>

  );
};

export default SigninForm;