import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

const Layout = () => {
  //The const isNonMobile is used to check if the screen is not mobile 
  //min-width: 600px is the width of the mobile screen
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  //The const isSidebarOpen is used to check if the sidebar is open or not
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    //The Box component is used to create a div element
    //isNonMobile ? 'flex' : 'block' is used to check if the screen is not mobile
    <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>
      <Sidebar 
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar 
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout;
