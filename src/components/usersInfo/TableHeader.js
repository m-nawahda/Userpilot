import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useStyles } from "./style";

const TableHeader = ({ searchByGenderHandler, searchByNationalityHandler }) => {
  const classes = useStyles();

  return (
    <Box className={classes.tableHeader}>
      <Typography variant="h2">All Users</Typography>
      <Box className={classes.inputFields}>
        <TextField
          onChange={(e) => {
            searchByGenderHandler(e.target.value);
          }}
          sx={{ marginRight: "13px" }}
          id="outlined-basic"
          label="Gender"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Nationality"
          variant="outlined"
          onChange={(e) => {
            searchByNationalityHandler(e.target.value);
          }}
        />
      </Box>
    </Box>
  );
};

export default TableHeader;
