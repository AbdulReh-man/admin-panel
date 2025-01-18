import { Box } from "@mui/material";
import { FC } from "react";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Dashboard: FC = () => {
  return (
    <Box>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header Title='DashBoard' SubTitle='Welcome Back' />
      </Box>
      <Box height='75vh'>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Dashboard;
