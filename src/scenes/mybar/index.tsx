import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <Box>
      <Header Title='Bar Chart' SubTitle='Simple Bar Chart' />
      <Box height='75vh'>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
