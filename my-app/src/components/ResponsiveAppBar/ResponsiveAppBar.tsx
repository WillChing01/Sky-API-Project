import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { Link as RouterLink } from 'react-router-dom';
import JoyLink from '@mui/joy/Link';

const pages = [
    {name: 'Home', route: '/'},
    {name: 'Photos', route: '/photos'},
    {name: 'Posts', route: '/posts'},
    {name: 'Create Post', route: '/create-post'}
];

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" color='default'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <JoyLink component={RouterLink} to={page.route} underline='none' color='success'>{page.name}</JoyLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;