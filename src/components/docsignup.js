import { Avatar, Grid, Paper, TextField, Typography, Button, FormControl, MenuItem, InputLabel, Select } from '@mui/material'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Docsignup = () => {

    const [domain, setDomain] = useState("");

    const handleChange = (event) => {
      setDomain(event.target.value);
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
          <TextField sx={{mt: 2, mb: 2}} label='Doctor ID' placeholder='Enter your ID' variant='standard' fullWidth required/>     
          <TextField sx={{mb: 3}} label='Name of Hospital' placeholder='Enter Hospital name' variant='standard' fullWidth required/>
          <FormControl fullWidth sx={{mb: 1}}>
        <InputLabel>Speciality</InputLabel>
        <Select
          value={domain}
          label="Speciality"
          onChange={handleChange} >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={1}>Neurologist</MenuItem>
          <MenuItem value={2}>Cardiologist</MenuItem>
          <MenuItem value={3}>Psychiatrist</MenuItem>
          <MenuItem value={4}>Dermatologist</MenuItem>
          <MenuItem value={5}>Anesthesiologist</MenuItem>
          <MenuItem value={6}>Radiologist</MenuItem>
          <MenuItem value={6}>Pediatrician</MenuItem>
          <MenuItem value={6}>Orthopedician</MenuItem>
        </Select>
      </FormControl>
          <TextField sx={{mb: 2}} label='Password' placeholder='Enter Password' variant='standard' type='password' fullWidth required/>
          <TextField sx={{mb: 2}} label='Confirm Password' placeholder='Confirm Password' variant='standard' type='password' fullWidth required/>
          <Link to="/doctor"><Button sx={{fontSize: '20px', backgroundColor: '#1bbd7e', mb: 2}} type='submit' variant='contained' fullWidth>SIGN UP</Button></Link>
          <Typography variant='h6'>Already have an Account ? <strong>Sign In</strong></Typography>
          <Link to="/"><Button fullWidth>Back to home</Button></Link>
  
        </Paper>
      </Grid>
  )
}

export default Docsignup