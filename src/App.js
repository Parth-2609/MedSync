import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import Doctor from './pages/doctor';
import User from './pages/user';
import {Box} from '@mui/material'
import Container from './components/container';
import Container2 from './components/container2';


function App() {
  return (
  <Box>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor" element={<Doctor/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/docsign" element={<Container/>} />
      <Route path="/usersign" element={<Container2/>} />
    </Routes>
  </Box>

  );
}

export default App;
