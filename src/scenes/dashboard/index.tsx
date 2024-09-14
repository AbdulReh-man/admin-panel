import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Header from "../../components/header";

const Dashboard: FC = () => {
  return (
    <Box sx={{ m: "20px" }}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header Title='DashBoard' SubTitle='Welcome Back' />
      </Box>
      <Box>
        <Typography>Dashboard</Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
