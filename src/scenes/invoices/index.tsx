import { Box, Theme, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockupdata";
import { tokens } from "../../theme";
import { FC } from "react";

const Invoices: FC = () => {
  const theme = useTheme<Theme>();
  const colors = tokens(theme.palette.mode);
  const columns: GridColDef<(typeof mockDataInvoices)[number]>[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 0.5,
      align: "center",
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography sx={{ color: colors.greenAccent[500] }}>
            ${params.row.cost}
          </Typography>
        </Box>
      ),
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];
  return (
    <>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header Title='Contact' SubTitle='Have a Question' />
      </Box>
      <Box
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            borderColor: "InactiveBorder",
          },
          "& .MuiDataGrid-cell": {
            border: "none !important",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-withBorderColor": {
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]}`,
          },
        }}
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          // pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </>
  );
};

export default Invoices;
