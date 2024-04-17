import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useUserContext } from '../../context/ByteContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
  const { user, logout } = useUserContext();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    alert('You have logged out successfully!');
  };

  const isActive = (match, location) => {
    if (!match) {
      return false;
    }
    return match.url === location.pathname;
  };

  const isHomeActive = isActive({ url: '/' }, location);
  const isRegisterActive = isActive({ url: '/register' }, location);
  const isLoginActive = isActive({ url: '/login' }, location);
  const isProfileActive = isActive({ url: '/profile' }, location);
  const isLogoutActive = location.pathname === "/";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#1976d2' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Link to="/">
              <img src="/src/assets/img/logo1.png" width="80px"  alt="Logo" />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ByteWorks
          </Typography>
          {user ? (
            <>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button color="inherit" component={NavLink} to="/" sx={{ fontWeight: isHomeActive ? 'bold' : 'normal', color: isHomeActive ? 'inherit' : 'lightgray' }}>Home</Button>
                <Button color="inherit" component={NavLink} to="/profile" sx={{ fontWeight: isProfileActive ? 'bold' : 'normal', color: isProfileActive ? 'inherit' : 'lightgray' }}>Profile</Button>
                <Button color="inherit" onClick={handleLogout} component={NavLink} to="/" sx={{ fontWeight: isLogoutActive ? 'bold' : 'lightgray', color: isLogoutActive ? 'inherit' : 'lightgray' }}>Logout</Button>
              </Box>
            </>
          ) : (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button color="inherit" component={NavLink} to="/" sx={{ fontWeight: isHomeActive ? 'bold' : 'normal', color: isHomeActive ? 'inherit' : 'lightgray'  }}>Home</Button>
              <Button color="inherit" component={NavLink} to="/register" sx={{ fontWeight: isRegisterActive ? 'bold' : 'normal', color: isRegisterActive ? 'inherit' : 'lightgray' }}>Register</Button>
              <Button color="inherit" component={NavLink} to="/login" sx={{ fontWeight: isLoginActive ? 'bold' : 'normal', color: isLoginActive ? 'inherit' : 'lightgray' }}>Login</Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
