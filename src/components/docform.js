import { Avatar, Grid, Paper, TextField, Typography, Button } from '@mui/material'
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import React from 'react'
import { Link } from 'react-router-dom';

const docform = () => {
  const paperStyle = {padding: 20, height: '70vh', width: 370, marginTop: '0px', marginRight: 'auto', marginLeft: 'auto'}
  const avatarStyle = {height: '60px', width: '60px', backgroundColor: '#1bbd7e'}
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align='center'>
        <Avatar style={avatarStyle}><LocalHospitalOutlinedIcon sx={{height: '110px', width: '110px'}}/></Avatar>
          <Typography sx={{mt: 2}} variant='h3'> Sign In </Typography>
        </Grid>
        <TextField sx={{mt: 5, mb: 5}} label='Doctor ID' placeholder='Enter your ID' variant='standard' fullWidth required/>        
        <TextField sx={{mb: 5}} label='Password' placeholder='Enter Password' variant='standard' type='password' fullWidth required/>
        <Link to="/doctor"><Button sx={{fontSize: '20px', backgroundColor: '#1bbd7e', mb: 5}} type='submit' variant='contained' fullWidth>SIGN IN</Button></Link>
        <Typography variant='h6'>Don't have an Account ? <Link to="/doctorsignup"> Sign Up</Link></Typography>
        <Link to="/"><Button fullWidth>Back to home</Button></Link>

      </Paper>
    </Grid>
  )
}

export default docform