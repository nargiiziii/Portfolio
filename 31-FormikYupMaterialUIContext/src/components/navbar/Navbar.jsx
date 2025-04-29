import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const current = users.find((user) => user.isLogined === true);
    if (current) setLoggedUser(current);
  }, []);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRegister = () => {
    navigate("/register");
    handleClose();
  };

  const handleLogin = () => {
    navigate("/login");
    handleClose();
  };

  const handleLogout = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updated = users.map((user) => ({ ...user, isLogined: false }));
    localStorage.setItem("users", JSON.stringify(updated));
    setLoggedUser(null);
    navigate("/login");
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            <IconButton color="inherit" onClick={() => navigate("/products")}>
              Products
            </IconButton>
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {loggedUser
                ? [
                    <MenuItem key="name" disabled>
                      {loggedUser.name}
                    </MenuItem>,
                    <MenuItem key="logout" onClick={handleLogout}>
                      Logout
                    </MenuItem>,
                  ]
                : [
                    <MenuItem key="register" onClick={handleRegister}>
                      Register
                    </MenuItem>,
                    <MenuItem key="login" onClick={handleLogin}>
                      Login
                    </MenuItem>,
                  ]}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
