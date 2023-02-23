import React, { useState } from "react";
import { Paper, Table, TableContainer, TablePagination } from "@mui/material";
import TableHeader from "./TableHeader";
import CustomTableBody from "./CustomTableBody";

const CustomizeTable = ({
  columns,
  data,
  setData,
  rowsCount,
  onClickHandler,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (_, newPage) => {
    setData(newPage + 1, rowsPerPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsNumber = +event.target.value;
    setData(1, newRowsNumber);
    setRowsPerPage(newRowsNumber);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader columns={columns} />
          <CustomTableBody
            data={data}
            columns={columns}
            onClickHandler={onClickHandler}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[8, 10]}
        component="div"
        count={rowsCount}
        rowsPerPage={rowsPerPage}
        page={page}
        labelDisplayedRows={() => {}}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CustomizeTable;
