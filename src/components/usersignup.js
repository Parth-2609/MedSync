import { Avatar, Grid, Paper, TextField, Typography, Button, FormControl, MenuItem, InputLabel, Select } from '@mui/material'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Usersignup= () => {

  const [gender, setGender] = useState("");

    const handleChange = (event) => {
      setGender(event.target.value);
    };
    const paperStyle = {padding: 20, height: '79vh', width: 370, marginTop: '0px', marginRight: 'auto', marginLeft: 'auto'}
    const avatarStyle = {height: '60px', width: '60px', backgroundColor: '#1bbd7e'}

  return (
    <Grid>
        <Paper style={paperStyle}>
          <Grid align='center'>
          <Avatar style={avatarStyle}><PersonAddOutlinedIcon sx={{height: '45px', width: '45px'}}/></Avatar>
            <Typography sx={{mt: 2}} variant='h3'> Sign Up </Typography>
          </Grid>
          <TextField sx={{mt: 2, mb: 2}} label='Full Name' placeholder='Enter your Name' variant='standard' fullWidth required/>     
          <TextField sx={{mb: 3}} label='Aadhar Number' placeholder='Enter Aadhar number' variant='standard' fullWidth required/>
          <FormControl fullWidth sx={{mb: 1}}>
        <InputLabel>Gender</InputLabel>
        <Select
          value={gender}
          label="Gender"
          onChange={handleChange} >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={1}>Male</MenuItem>
          <MenuItem value={2}>Female</MenuItem>
          <MenuItem value={3}>Others</MenuItem>
        </Select>
      </FormControl>
          <TextField sx={{mb: 2}} label='Password' placeholder='Enter Password' variant='standard' type='password' fullWidth required/>
          <TextField sx={{mb: 2}} label='Confirm Password' placeholder='Confirm Password' variant='standard' type='password' fullWidth required/>
          <Link to="/user"><Button sx={{fontSize: '20px', backgroundColor: '#1bbd7e', mb: 2}} type='submit' variant='contained' fullWidth>SIGN UP</Button></Link>
          <Typography variant='h6'>Already have an Account ? <strong>Sign In</strong></Typography>
          <Link to="/"><Button fullWidth>Back to home</Button></Link>
  
        </Paper>
      </Grid>
  )
}

export default Usersignup