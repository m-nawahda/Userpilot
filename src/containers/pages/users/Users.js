import React from "react";
import { Box } from "@mui/system";
import Header from "../../../components/header/Header";
import UsersInfo from "../../../components/usersInfo/UsersInfo";
import { useStyles } from "./style";

const Users = () => {
  const classes = useStyles();
  return (
    <Box className={classes.usersPage}>
      <Header />
      <UsersInfo />
    </Box>
  );
};

export default Users;
