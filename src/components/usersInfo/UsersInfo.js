import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import ProfilePage from "../../containers/pages/users/profilePage";
import TableHeader from "./TableHeader";
import CustomizeTable from "../table/CustomizeTable";
import { getUsersHandler } from "../../utils/backendApi";
import { columns } from "../../constants/tableConstants";
import { useStyles } from "./style";

const UsersInfo = () => {
  const [users, setUsers] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [targetUser, setTargetUser] = useState({});
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    getUsersHandler(setUsers, 1, 8);
    // eslint-disable-next-line
  }, []);

  const setUsersHandler = (pageNumber, rowsPerPage) => {
    getUsersHandler(setUsers, pageNumber, rowsPerPage);
  };

  const searchByNationalityHandler = (nat) => {
    getUsersHandler(setUsers, 1, 8, nat);
  };

  const searchByGenderHandler = (gender) => {
    getUsersHandler(setUsers, 1, 8, null, gender);
  };

  const onClickHandler = ({ user, id }) => {
    setTargetUser(user);
    setIsOpen(true);
    navigate(`${id}`);
  };

  return (
    <Box className={classes.tableContainer}>
      <TableHeader
        searchByNationalityHandler={searchByNationalityHandler}
        searchByGenderHandler={searchByGenderHandler}
      />
      <CustomizeTable
        columns={columns}
        data={users}
        setData={setUsersHandler}
        rowsCount={5000}
        onClickHandler={onClickHandler}
      />
      <ProfilePage isOpen={isOpen} setIsOpen={setIsOpen} user={targetUser} />
    </Box>
  );
};

export default UsersInfo;
