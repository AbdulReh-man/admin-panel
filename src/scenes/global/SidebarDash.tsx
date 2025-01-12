import { FC, ReactNode, useState } from "react";
import {
  Sidebar as Prosidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  menuClasses,
  SubMenu,
} from "react-pro-sidebar";
import { Box, IconButton, Theme, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { tokens } from "../../theme";
import profilepic from "../../assets/profilepic.jpeg";
import { SideabrAdmin as SideabrNavigation } from "../../data/sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import GrainOutlinedIcon from "@mui/icons-material/GrainOutlined";

interface ItemProps {
  title: string;
  to: string;
  icon: ReactNode;
}

const Item: FC<ItemProps> = ({ title, to, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <MenuItem active={isActive} component={<Link to={to} />} icon={icon}>
      <Typography sx={{ fontSize: "1.3rem" }}>{title}</Typography>
    </MenuItem>
  );
};

const SidebarDash: FC = () => {
  const theme = useTheme<Theme>();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
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
            paddingBlock: "1.5rem",
            color: colors.grey[100],
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
        <Box sx={{ paddingBlock: "0.8rem" }}>
          <Item
            title='Dashboard'
            to='/'
            icon={<SpaceDashboardOutlinedIcon />}
          />
        </Box>
        {SideabrNavigation.map((item, index) => {
          const icons = <item.icon />;
          return (
            <SubMenu
              key={index.toString()}
              label={item.title}
              icon={icons}
              rootStyles={{
                [`.${menuClasses.label}`]: {
                  fontSize: "1.3rem",
                },
                [`.${menuClasses.subMenuContent}`]: {
                  width: "fit-content",
                  backgroundColor: colors.primary[400],
                  paddingBlock: "0.7rem",
                },
              }}
            >
              {item.items.map((subitem, itemindex) => (
                <Item
                  key={itemindex.toExponential()}
                  title={subitem.title}
                  to={subitem.to}
                  icon={<GrainOutlinedIcon />}
                />
              ))}
            </SubMenu>
          );
        })}
      </Menu>
    </Prosidebar>
  );
};

export default SidebarDash;
