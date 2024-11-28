import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <Box
                sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}>
                <Box
                    sx={{
                        my: 3, "& svg": {
                            fontSize: "60px",
                            cursor: "pointer",
                            mr: 2
                        },
                        "& svg:hover": {
                            color: "goldenrod",
                            transform: "translateX(5px)",
                            transition: "all 400ms ease"
                        }
                    }}>
                    <Link to={"https://www.instagram.com/"} >
                        <InstagramIcon />
                    </Link>
                    <Link to={"https://x.com/?lang=en"}>
                        <XIcon />         </Link>
                    <Link to={"https://www.github.com/Shettysushanth77"}>
                        <GitHubIcon />
                    </Link>
                    <Link to={"https://www.linkedin.com/in/sushanthshetty7"}>
                        <LinkedInIcon />
                    </Link>

                </Box>
                <Typography variant='h5' sx={{
                    "@media (max-width:600px)": {
                        fontSize: "1rem"
                    }
                }}>
                    All Rights Are Reserved &copy; Sushanth
                </Typography>
            </Box>
        </>
    )
}

export default Footer