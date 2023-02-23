import React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import CustomizeCell from "./CustomizeCell";

const CustomTableBody = ({ data, columns, onClickHandler }) => {
  return (
    <TableBody>
      {data &&
        data.map((user) => {
          return (
            <TableRow
              hover
              tabIndex={-1}
              key={user.id}
              onClick={() => onClickHandler(user)}
            >
              {columns.map((column) => {
                const [mainValue, secValue, icon] = Object.values(
                  user[column.id]
                );
                return (
                  <TableCell key={`${user.id}-${column.id}`}>
                    <CustomizeCell
                      mainValue={mainValue}
                      secValue={secValue}
                      icon={icon}
                    />
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
    </TableBody>
  );
};

export default CustomTableBody;
