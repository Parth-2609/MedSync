import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Typography, Button} from '@mui/material'


const NavBar = () => {
  return (
    
    <div>
        <AppBar sx={{backgroundColor: '#1bbd7e', height: '9vh'}}>
          <Toolbar>
            <Typography variant='h4' sx={{flexGrow: '1'}}>MedSync</Typography>
            <Link to='/docsign'>
              <Button variant='contained' color='inherit' size='large' sx={{mr: '50px'}}>
                Doctor
              </Button>
            </Link>
            <Link to='/usersign'>
              <Button color='inherit' variant='contained' size='large' sx={{mr: '50px'}}>
                User
              </Button>
            </Link>
            <Link to="/">
              <Button color='inherit' variant='contained' size='large' sx={{mr: '50px'}}>BACK</Button>
            </Link>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar