// Services.js
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { blue } from '@mui/material/colors';
import Navbar from './Navbar';
import Footer from './Footer';
import Lego from '../assets/Lego.jpg';
import blueo from '../assets/blueo.jpg';
import crayola from '../assets/crayola.jpg';
import kinderkraft from '../assets/kinderkraft.jpg';
import funskool from '../assets/funskool.jpg';
import hamleys from '../assets/hamleys.jpg';
import bluetrip from '../assets/bluetrip.jpg';
import nerf from '../assets/nerf.jpg';
import doodlehog from '../assets/doodlehog.jpg';

const services = [
  {
    title: 'LEGO',
    description: 'LEGO bricks are colorful plastic building blocks that can be joined together easily to make a tower, house, and more.',
    image: Lego,
  },
  {
    title: 'BLUE ORANGE',
    description: 'Enter the world of board games, source of unforgettable moments, through our simple, fun and clever games using Blue Orange,',
    image:blueo
  },
  {
    title: 'CRAYOLA',
    description: 'Crayola brand has a portfolio of art tools, crafting activities and creativity toys that offer children innovative ways to use color to create everything imaginable.',
    image:crayola
  },
  {
    title: 'KINDERKRAFT',
    description: 'Kinderkraft is a brand whose mission is to help parents and children discover the world together, providing products that combine innovative solutions',
    image:kinderkraft
  },
  {
    title: 'FUNSKOOL',
    description: 'Create engaging and SEO-friendly content for kids using FUNSKOOL',
    image:funskool
  },
  {
    title: 'HAMLEYS',
      description: 'Hamleys is one of the leading businesses in the Toy Shops.handling multiple stationery,toys,personalized gift shops ',
      image:hamleys
  },
  {
    title: 'BLUETRIP',
    description: 'Manage and grow the mental ability of your child using BLUE TRIP toys.',
    image:bluetrip
  },
  {
  title: 'NERF',
    description: 'You can pick from the best Nerf guns and get ready to have a fun battle with your buddies. ',
    image:nerf
  },
  {
    title: 'DOODLE HOG',
    description: 'We are Doodle Hog, a collection of fun-loving people on a mission to draw, paint, cut, paste and have fun. ',
    image:doodlehog
  }
];
function Services(){ 
  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h3" component="div" style={{ marginTop: '50px', marginBottom: '20px',color:blue }}>
        TOY BRANDS
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
                sx={{ objectFit: 'cover' }}
              />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body3" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      //<Footer />
    </div>
  );
}

export default Services;