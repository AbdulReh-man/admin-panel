import { Box, Theme, Typography, useTheme } from "@mui/material";
import Header from "../../components/header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockupdata";
import { tokens } from "../../theme";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const Team = () => {
  const theme = useTheme<Theme>();
  const colors = tokens(theme.palette.mode);
  const columns: GridColDef<(typeof mockDataTeam)[number]>[] = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerClassName: "MuiDataGrid-root",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 110,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 110,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { access } }) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: "60%",
              m: "auto",
              p: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0 5px",
              backgroundColor:
                access === "admin"
                  ? colors.redAccent[600]
                  : access === "manager"
                  ? colors.blueAccent[600]
                  : colors.greenAccent[700],
              borderRadius: "5px",
            }}
          >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}
            <Typography sx={{ color: colors.grey[100] }}>{access}</Typography>
          </Box>
        </Box>
      ),
    },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (_, row) =>
    //     `${row.name || ""} ${row.email || ""} ${row.age || ""}`,
    // },
  ];
  return (
    <>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header Title='Team' SubTitle='Manage The Team Members' />
      </Box>
      <Box sx={{}}>
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          disableRowSelectionOnClick
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderColor: "InactiveBorder",
            },
            "& .MuiDataGrid-cell": {
              border: "none !important",
            },
            "& .MuiDataGrid-withBorderColor": {
              backgroundColor: colors.blueAccent[700],
              fontSize: theme.typography.h5,
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        />
      </Box>
    </>
  );
};

export default Team;
