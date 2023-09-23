import { Avatar, Grid, Paper, TextField, Typography, Button } from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from 'react'
import { Link } from 'react-router-dom';

const userform = () => {
    const paperStyle = {padding: 20, height: '70vh', width: 370, marginRight: 'auto', marginLeft: 'auto'}
  const avatarStyle = {height: '60px', width: '60px', backgroundColor: '#1bbd7e'}
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align='center'>
        <Avatar style={avatarStyle}><PersonOutlineOutlinedIcon sx={{height: '55px', width: '55px'}}/></Avatar>
          <Typography sx={{mt: 2}} variant='h3'> Sign In </Typography>
        </Grid>
        <TextField sx={{mt: 5, mb: 5}} label='Aadhar No.' placeholder='Enter Aadhar No.' variant='standard' fullWidth required/>        
        <TextField sx={{mb: 5}} label='Password' placeholder='Enter Password' variant='standard' type='password' fullWidth required/>
        <Link to="/user"><Button sx={{fontSize: '20px', backgroundColor: '#1bbd7e', mb: 5}} type='submit' variant='contained' fullWidth>SIGN IN</Button></Link>
        <Typography variant='h6'>Already have an Account ? <strong>Sign Up</strong></Typography>
        <Link to="/"><Button fullWidth>Back to home</Button></Link>

      </Paper>
    </Grid>
  )
}

export default userform