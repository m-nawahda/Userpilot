import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { useStyles } from "./style";

const CustomizeCell = ({ mainValue, secValue, icon }) => {
  const classes = useStyles();
  return (
    <Box className={classes.cell}>
      {icon && (
        <Avatar alt={mainValue} src={icon} style={{ marginRight: "24px" }} />
      )}
      <Box className={classes.boxInfo}>
        <Typography variant="h3">{mainValue}</Typography>
        <Typography variant="h4">{secValue}</Typography>
      </Box>
    </Box>
  );
};

export default CustomizeCell;
