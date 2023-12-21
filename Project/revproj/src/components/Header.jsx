import React from 'react';
import { Container, Button, Typography } from '@mui/material';

function Header() {
  return (
    <Container
      sx={{
        marginTop: '5%', // Adjust the marginTop value to move the container higher
        minHeight: '60vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundImage:'url("con.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '15px',
        maxWidth: '200px',
        width: '50%',
      }}
    >
      <Typography variant="h3" component="div" style={{ marginTop: '100px', marginBottom: '20px' }}>
        STAADLEEST TOY STORE
      </Typography>
      <Typography variant="subtitle1" paragraph>
        The finest toy store in India. Staad Leest Is Your One Stop Shop for All Your Baby Care toys. To meet children's
        needs and necessities, we are constantly innovating new toys & games.
        <Typography variant="subtitle2" paragraph></Typography>
        Shop today.
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: '#FFC0CB', color: 'white' }}>
        Toy Brands
      </Button>
      
    </Container>
  );
}

export default Header;
