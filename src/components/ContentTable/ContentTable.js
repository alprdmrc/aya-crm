import { React, useState } from "react";

import {
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  TableCell,
  TableHead,
} from "@mui/material";

import { TablePaginationActions } from "../Pagination";
import Modals from "../Modal/Modal";

const customers = [
  {
    id: 1,
    name: "Lillian Carter",
    email: "xcollier@goodwin.com",
    phone: "+1-267-551-8666",
    company: "Larkin Group",
    label: "Marketing",
  },
  {
    id: 2,
    name: "Otto Walker",
    email: "stokes.hubert@hotmail.com",
    phone: "+1-580-977-4361",
    company: "Bednar-Sawayn",
    label: "Newsletter",
  },
  {
    id: 3,
    name: "Kaylee Taylor",
    email: "diana45@hotmail.com",
    phone: "+1-202-918-2132",
    company: "Rolfson and Sons ",
    label: "Ads",
  },
  {
    id: 4,
    name: "Aiden Houston",
    email: "ctromp@kassulke.info",
    phone: "+1-215-480-3687",
    company: "Wisoky, Windler and Nienow",
    label: "Newsletter",
  },
  {
    id: 5,
    name: "Davis Houston",
    email: "voreilly@yahoo.com",
    phone: "+1-203-883-5460",
    company: "Schmidt, Streich and Schuster",
    label: "Ads",
  },
];

const ContentTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [customerData, setCustomerData] = useState();

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - customers.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleClick = (data) => {
    setIsOpen(true);
    setCustomerData(data);
  };

  return (
    <TableContainer component={Paper} sx={{ margin: "2rem", width: "95%" }}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRight: "1px solid white",
              }}
            >
              Name
            </TableCell>
            <TableCell
              align="left"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRight: "1px solid white",
              }}
            >
              Company
            </TableCell>
            <TableCell
              align="left"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRight: "1px solid white",
              }}
            >
              Email
            </TableCell>
            <TableCell
              align="left"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRight: "1px solid white",
              }}
            >
              Phone
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers &&
            (rowsPerPage > 0
              ? customers.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : customers
            ).map((row, index) => (
              <TableRow
                key={index}
                onClick={() => {
                  handleClick(row);
                }}
                sx={{ cursor: "pointer" }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ width: 160, borderRight: "1px solid black" }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{ width: 160, borderRight: "1px solid black" }}
                  align="left"
                >
                  {row.company}
                </TableCell>
                <TableCell
                  sx={{ width: 160, borderRight: "1px solid black" }}
                  align="left"
                >
                  {row.email}
                </TableCell>
                <TableCell sx={{ width: 160 }} align="left">
                  {row.phone}
                </TableCell>
              </TableRow>
            ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={customers}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <Modals data={customerData} open={isOpen} setIsOpen={setIsOpen} />
    </TableContainer>
  );
};

export default ContentTable;