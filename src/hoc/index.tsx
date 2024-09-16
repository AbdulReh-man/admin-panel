import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

interface HOCProps {
  children: ReactNode;
}

export const Wrapper: FC<HOCProps> = ({ children }) => {
  return <Box sx={{ maxWidth: "1500px", p: "20px" }}>{children}</Box>;
};
