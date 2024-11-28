import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "center",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        – where flavors come alive, and every bite tells a story! Nestled in the heart of Bangalore, we pride ourselves on serving a diverse menu crafted with love, passion, and the finest ingredients.
        </p>
        <br/>
        <p>
        - we believe dining is more than just a meal; it’s an experience. Whether you're here for a casual lunch, a family dinner, or a special celebration, our warm ambiance and attentive service ensure every visit is memorable.
        </p>
        <br/>
        <ul style={{listStyle:"none", lineHeight:"28px"}}>
          <li>
          <h3>Our Philosophy</h3>
          </li>
         
          <li> We source the freshest produce, meats, and seafood to create dishes that delight the palate.</li>
          <li> Our chefs blend traditional flavors with modern techniques to bring you a unique dining experience.</li>
          <li> Your satisfaction is our priority. We strive to make every guest feel at home.</li>
        </ul>
        <br />
        <br/>
        <ul style={{listStyle:"none", lineHeight:"28px"}}>
          <li>
          <h3>What We Offer</h3>
          </li>
          <li>Discover our chef’s specials, inspired by global and local cuisines.</li>
          <li> From intimate seating to family-friendly spaces, we’ve designed our restaurant to cater to every occasion.</li>
          <li> Celebrate birthdays, anniversaries, or corporate events with us – we’ll make it unforgettable!</li>
        </ul>
        <br />
      </Box>
    </Layout>
  )
}

export default About