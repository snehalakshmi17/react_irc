import React from 'react';
import { AppBar, Toolbar,IconButton, Typography,Link } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#FFE4C4' }} >
    <Toolbar>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#A52A2A' }} >
        STAAD LEEST TOYSTORE
      </Typography>
      
      <div>
        <IconButton color="inherit" component={Link} href="/Home" sx={{ fontSize: 'medium',color: '#A52A2A' }}>Home</IconButton>
        <IconButton color="inherit" component={Link} href="/Login"  sx={{ fontSize: 'medium',color: '#A52A2A' }}>Login</IconButton>
        <IconButton color="inherit" component={Link} href="/Register"  sx={{ fontSize: 'medium',color: '#A52A2A' }}>Register</IconButton>
        <IconButton color="inherit" component={Link} href="/Toy Brands"  sx={{ fontSize: 'medium',color: '#A52A2A' }}>Toy Brands</IconButton>
        <IconButton color="inherit" component={Link} href="/Contact Us"  sx={{ fontSize: 'medium',color: '#A52A2A' }}>Contact Us</IconButton>
      </div>
      
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;