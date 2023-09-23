import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import Userform from './components/userform'
import Doctor from './pages/doctor';
import User from './pages/user';
import UserSignUp from './components/usersignup';
import {Box} from '@mui/material'
import Container from './components/container';


function App() {
  return (
  <Box>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/userform' element={<Userform/>} />
      <Route path="/doctor" element={<Doctor/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/usersignup" element={<UserSignUp/>} />
      <Route path="/docsign" element={<Container/>} />
    </Routes>
  </Box>

  );
}

export default App;
