import React from 'react';
import Link from 'next/link';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, MenuList, MenuItem, ListItemText, Drawer, ListItemIcon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton
                onClick={handleDrawerToggle}
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" style={{ marginLeft: "20px" }}>
                電算部
              </Typography>
              <Button color="inherit" style={{ marginLeft: "85%" }}>Login</Button>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerToggle}
          >
            <MenuList>
              <Link href="/home">
                <MenuItem>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </MenuItem>
              </Link>
              <Link href="/profile">
                <MenuItem>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </MenuItem>
              </Link>
            </MenuList>
          </Drawer>
        </Box>
      );
    }

export default Header;
