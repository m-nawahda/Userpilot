import React from "react";
import { Box, Drawer, Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./style";

const ProfilePage = ({ isOpen, setIsOpen, user }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const closeDrawerHandler = () => {
    setIsOpen(false);
    navigate("/users");
  };

  return (
    <Drawer
      anchor={"right"}
      open={isOpen}
      onClose={closeDrawerHandler}
      sx={{
        flexShrink: 0,
        "& .MuiBackdrop-root": {
          opacity: "0 !important",
        },
        "& .MuiPaper-root": {
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15);",
        },
      }}
    >
      <Box sx={{ width: "33vw" }}>
        <Box className={classes.coverBox} />
        <Box className={classes.profileInfoBox}>
          <Avatar src={user.userImage} sx={{ width: "14vh", height: "14vh" }} />
          <Typography variant="h2">{user.fullName}</Typography>
          <Typography variant="h4">{user.address}</Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ProfilePage;
