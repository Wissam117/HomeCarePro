import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MIcon from '../../assect/images/homepagelogo.png'
import { Image } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Navbar({ toggleAbout, toggleServices, toggleAboutandServices }) {
  return (
    <Box  sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:"#A9A9A9"}} >
        <Toolbar>
          <img src={MIcon} alt="M-Logo" width="80px" height="80px" />
          <Typography variant="h6" component="div" sx={{textAlign: "left", flexGrow: 1 }}>
            HomeCarePro
          </Typography>
          <Button color="inherit" onClick={toggleAboutandServices}>Home</Button>
          <Button color="inherit" onClick={toggleAbout} >About</Button>
          <Button color="inherit" onClick={toggleServices}>Services</Button>
          <Button color="inherit"><Link to="/signup">Login</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}