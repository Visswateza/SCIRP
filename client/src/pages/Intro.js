import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import {Link} from 'react-router-dom';


export default function Intro() {
  return (
      <Box sx={{ flexGrow: 6 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Vignan Hire
            </Typography>
            <Button color="inherit" href="/login">Login</Button>
            <Button color="inherit" href="/register">Register</Button>
          </Toolbar>
        </AppBar>
        <table>
            <tr>
            <Box
            component="img"
            sx={{
              height: 500,
              width: 500,
            }}
            alt="The house from the offer."
            src= "https://www.gitpod.io/images/illustration-large.png"
            />
            <td>
            <Typography variant="h2">
                Welcome to V-Hire.
            </Typography>
            </td>
            </tr>
        </table>
      </Box>
  );
}