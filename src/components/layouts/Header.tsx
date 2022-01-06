import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" style={{ marginLeft: "20px" }}>
                Home
              </Typography>
              <Button color="inherit" style={{ marginLeft: "85%" }}>Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }

export default Header;
