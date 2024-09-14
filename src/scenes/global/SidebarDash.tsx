import { FC, ReactNode, useState } from "react";
import {
  Sidebar as Prosidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Theme, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import profilepic from "../../assets/profilepic.jpeg";

interface ItemProps {
  title: string;
  to: string;
  icon: ReactNode;
}

const Item: FC<ItemProps> = ({ title, to, icon }) => {
  const theme = useTheme<Theme>();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <MenuItem
      active={isActive}
      style={{
        color: colors.grey[100],
      }}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarDash: FC = () => {
  const theme = useTheme<Theme>();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Prosidebar
      collapsed={open}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: colors.primary[400],
          position: "sticky",
          top: 0,
          "&": {
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          },
        },
      }}
    >
      <Menu
        rootStyles={{
          [`.${menuClasses.button}`]: {
            [`&:hover`]: {
              background: "none",
              [`.${menuClasses.label}, .${menuClasses.icon}`]: {
                color: "#868dfb",
              },
            },
            height: "40px !important",
          },
          [`.${menuClasses.active}`]: {
            [`.${menuClasses.label}, .${menuClasses.icon}`]: {
              color: "#868dfb",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            color: colors.grey[100],
            backgroundColor: colors.primary[400],
            zIndex: "100",
            pt: "15px",
            pb: "5px",
            mb: "20px",
          }}
        >
          <MenuItem
            onClick={() => setOpen(!open)}
            icon={open ? <MenuOutlinedIcon /> : undefined}
          >
            {!open && (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                ml='15px'
              >
                <Typography variant='h3' color={colors.grey[100]}>
                  DashBoard
                </Typography>
                <IconButton onClick={() => setOpen(!open)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        </Box>

        {!open && (
          <Box mb='25px'>
            <Link to='/'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img
                  src={profilepic}
                  alt='Admin'
                  width='100px'
                  height='100px'
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
            </Link>
            <Box textAlign='center'>
              <Typography
                variant='h4'
                color={colors.grey[100]}
                fontWeight='bold'
                sx={{ m: "10px 0 0 0" }}
              >
                Abdul Rehman
              </Typography>
              <Typography variant='h5' color={colors.greenAccent[500]}>
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}
        <Box paddingLeft={open ? undefined : "10%"}>
          <Item title='Dashboard' to='/' icon={<HomeOutlinedIcon />} />

          <Typography
            variant='h6'
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Data
          </Typography>
          <Item title='Manage Team' to='/team' icon={<PeopleOutlinedIcon />} />
          <Item
            title='Contacts Information'
            to='/contacts'
            icon={<ContactsOutlinedIcon />}
          />
          <Item
            title='Invoices Balances'
            to='/invoices'
            icon={<ReceiptOutlinedIcon />}
          />

          <Typography
            variant='h6'
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Pages
          </Typography>
          <Item title='Profile Form' to='/form' icon={<PersonOutlinedIcon />} />
          <Item
            title='Calender'
            to='/calender'
            icon={<CalendarTodayOutlinedIcon />}
          />
          <Item title='FAQ Page' to='/faq' icon={<HelpOutlineOutlinedIcon />} />

          <Typography
            variant='h6'
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Charts
          </Typography>
          <Item title='Bar Chart' to='/bar' icon={<BarChartOutlinedIcon />} />
          <Item
            title='Pie Chart'
            to='/pie'
            icon={<PieChartOutlineOutlinedIcon />}
          />
          <Item title='Line Chart' to='/line' icon={<TimelineOutlinedIcon />} />
          <Item
            title='Geography Chart'
            to='/geography'
            icon={<MapOutlinedIcon />}
          />
        </Box>
      </Menu>
    </Prosidebar>
  );
};

export default SidebarDash;
