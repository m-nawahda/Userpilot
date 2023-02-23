import React from "react";
import { Typography, Box, Avatar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { PROFILE_IMAGE } from "../../constants/resouces";
import { useStyles } from "./style";

const Header = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <Box className={classes.header}>
      <Typography variant="h1">{pathname.split("/")[1]}</Typography>
      <Box className={classes.profileBox}>
        <Typography variant="h3">Jones Ferdinand</Typography>
        <Avatar src={PROFILE_IMAGE} alt="header" />
      </Box>
    </Box>
  );
};

export default Header;
