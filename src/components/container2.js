import React from 'react'
import {Tab, Tabs, Box, Typography, Paper} from '@mui/material'
import Userform from './userform';
import Usersignup from './usersignup';


const Container2 = () =>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
  };
    const paperStyle = {width: 410, margin: '40px auto' }


  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
    return(
    <Paper elevation={20} style={paperStyle}>
        <Tabs value={value} onChange={handleChange}>
        <Tab label="Sign In" sx={{fontSize: '25px', mr: 17}} />
        <Tab label="Sign Up" sx={{fontSize: '25px'}} />
        </Tabs>
        
        <CustomTabPanel value={value} index={0}>
            <Userform/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <Usersignup/>
        </CustomTabPanel>
    </Paper>
    )
}


export default Container2;