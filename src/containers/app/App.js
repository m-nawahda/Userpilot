import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { theme } from "../../assets/themes/theme";
import SideBar from "../sideBar/SideBar";
import Users from "../pages/users/Users";
import "@fontsource/mulish";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <SideBar />
        <Routes>
          <Route path="/users/*" element={<Users />} />
          <Route path="/" element={<Navigate to="users" />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
