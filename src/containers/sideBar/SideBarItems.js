import React from "react";
import { Avatar, List, ListItem, Typography } from "@mui/material";
import { listItems } from "../../constants/sideBarConstants";
import { useStyles } from "./style";


const SideBarItems = () => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {listItems.map(({ itemName, icon }) => (
        <ListItem
          className={classes.listItem}
          key={itemName}
          sx={{
            "&:last-child": {
              backgroundColor: "rgb(159, 162, 180, 0.08)",
              borderLeft: "3px solid #DDE2FF",
            },
            "& h5": {
              color: "#DDE2FF",
            },
          }}
        >
          <Avatar
            src={icon}
            alt={itemName}
            sx={{
              width: "16px",
              height: "16px",
            }}
          />
          <Typography variant="h5">{itemName}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBarItems;
