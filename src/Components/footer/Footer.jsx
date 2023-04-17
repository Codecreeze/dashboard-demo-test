import React from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { DARK_VIOLET_COLOUR } from '../CommonStyle/Color';





const Footer = () => {
  return (
    <React.Fragment>
        <div style={{ marginTop: 100, paddingTop: 50, paddingBottom: 50, background: "#cce6ff" }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>           
            <Typography variant='h6' sx={{ color: "black", fontWeight: "bold", ml: -2 }}>Rooba Finance</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Button sx={{ mr: 2, textTransform: "none", borderRadius: 5, color: "black", '&:hover': { backgroundColor: DARK_VIOLET_COLOUR, color: 'white', }, }}>Products</Button>
            <Button sx={{ mr: 2, textTransform: "none", borderRadius: 5, color: "black", '&:hover': { backgroundColor: DARK_VIOLET_COLOUR, color: 'white', }, }}>About</Button>
            <Button sx={{ mr: 2, textTransform: "none", borderRadius: 5, color: "black", '&:hover': { backgroundColor: DARK_VIOLET_COLOUR, color: 'white', }, }}>Contact</Button>
            <Button sx={{ mr: 2, textTransform: "none", borderRadius: 5, color: "black", '&:hover': { backgroundColor: DARK_VIOLET_COLOUR, color: 'white', }, }}>Privacy Policy</Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <IconButton
              sx={{ mr: 2, color: "#1a75ff",'&:hover': { backgroundColor: "#cce6ff" }, }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{ mr: 2, color: "#ff6600",'&:hover': { backgroundColor: "#cce6ff" }, }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              sx={{ mr: 2, color: "#66ccff",'&:hover': { backgroundColor: "#cce6ff" }, }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              sx={{ mr: 2, color: "#0A66C2",'&:hover': { backgroundColor: "#cce6ff" }, }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant='body1' sx={{ color: "#8c8c8c", fontWeight: "bold" }}>© 2023 Rooba Finance || All rights reserved.</Typography>
          </Box>
        </div>
    </React.Fragment>
  )
}

export default Footer;