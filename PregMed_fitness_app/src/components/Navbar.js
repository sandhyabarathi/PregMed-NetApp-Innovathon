import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';



const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid blue' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      {/* <Link to="/Doctors" style={{ textDecoration: 'none', color: '#3A1212' }}>Doctors</Link>
      <Link to="/Hospitals" style={{ textDecoration: 'none', color: '#3A1212' }}>Hospitals</Link> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/doctors' element={<Doctors />} ></Route>
          <Route path='/hospitals' element={<Hospitals />} ></Route>
        </Routes>
      </BrowserRouter> */}
      
      
    </Stack>
  </Stack>
);

export default Navbar;
