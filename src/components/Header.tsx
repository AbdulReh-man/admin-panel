import { Box, Theme, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { tokens } from "../theme";

interface HeaderProps {
  Title: string;
  SubTitle: string;
}

const Header: FC<HeaderProps> = ({ Title, SubTitle }) => {
  const theme = useTheme<Theme>();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb='30px'>
      <Typography
        variant='h2'
        sx={{
          mb: "5px",
          fontWeight: "bold",
          color: colors.grey[100],
        }}
      >
        {Title}
      </Typography>
      <Typography variant='h5' sx={{ color: colors.greenAccent[400] }}>
        {SubTitle}
      </Typography>
    </Box>
  );
};

export default Header;
