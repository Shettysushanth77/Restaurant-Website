import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/HeaderStyles.css"
import logo from "../../images/logo.svg"

const Header = () => {
  const [mobileOpen,setMobileOpen] = useState(false)



  const handelDrawerToggle = ()=>{
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick = {handelDrawerToggle} sx={{textAlign:"center"}}>
      <Typography variant='h6' component="div" color='goldenrod' sx={{flexGrow:1, my:2}}>
          <FastfoodIcon/>
          My Returant
        </Typography>
        <Divider/>
          <ul className='mobile-navigation'>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        
    </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={"nav"} sx={{bgcolor:"black"}}>
        <Toolbar>
          <IconButton
          color='inherit'
          aria-label='open drawer'
          edge="start"
          sx={{
            m:2,
            display:{sm:"none"}
          }}
          onClick={handelDrawerToggle}>
            <MenuIcon />
          </IconButton>
        <Typography variant='h6' component="div" color='goldenrod' sx={{flexGrow:1}}>
          <img src={logo} alt="logo" height={"70"} width={"250"}/>
        </Typography>
        <Box sx={{display:{xs:"none",sm:"block"}}}>
          <ul className='navigation-menu'>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </Box>
        </Toolbar>
      </AppBar>
      <Box component={"nav"}>
        <Drawer variant='temporary' 
        open={mobileOpen} 
        onClose={handelDrawerToggle}
        sx={{display:{xs:"block",sm:"none"}, 
        "& .MuiDrawer-paper":{
          boxSizing:'border-box',
          width:"240px"
        }}}>
        {drawer}
        </Drawer>
      </Box>
      <Box >
      <Toolbar/>
      </Box>
     
    </Box>
    </>
  )
}

export default Header