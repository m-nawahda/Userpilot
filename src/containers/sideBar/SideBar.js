import React from "react";
import { Box } from "@mui/material";
import logo from "../../assets/images/logo.svg";
import SideBarItems from "./SideBarItems";
import { useStyles } from "./style";

const SideBar = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.sideBar}
      sx={{
        width: 255,
        height: "100vh",
        backgroundColor: "#363740",
      }}
    >
      <img src={logo} className={classes.logo} alt={"userPilot"} />
      <SideBarItems />
    </Box>
  );
};

export default SideBar;
