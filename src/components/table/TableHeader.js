import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const TableHeader = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{
              minWidth: column.minWidth,
              fontFamily: "Mulish",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "18px",
              color: "#9FA2B4",
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
