import { Box } from '@mui/system';
import NavBar from '../components/NavBar';
import SideNav from '../components/SideNav';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';

const AppLayout = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar open={open} setOpen={setOpen} />
      <SideNav open={open} setOpen={setOpen} />
      <Box component="main" sx={{ width: '100%', px: 2, pt: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
