import { Box, Typography, Button } from '@mui/material'
import NavBar from '../components/NavBar'
import '../App.css'
import React from 'react'

const home = () => {
  return (
<Box>
<NavBar/>
        <Typography variant='h3' sx={{mt: 15}}>
            This is our HOME PAGE
        </Typography>  
        <Typography variant='h3'>
            What does this Website Provide
        </Typography>  
</Box>
  )
}

export default home