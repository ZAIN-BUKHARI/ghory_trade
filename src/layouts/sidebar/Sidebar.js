import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Link,
  Button,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import LogoIcon from "../logo/LogoIcon";
import Menuitems from "./MenuItems";

import { useRouter } from "next/router";

const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
  const [open, setOpen] = React.useState(true);

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const handleClick = (index) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };
  let curl = useRouter();
  const location = curl.pathname;

  const SidebarContent = (
    <Box p={2} height="100%">
      <LogoIcon />
      <Box mt={2}>
        <List>
          {Menuitems.map((item, index) => (
            <List component="li" disablePadding key={item.title}>
              <NextLink href={item.href}>
                <ListItem
                  onClick={() => handleClick(index)}
                  button
                  selected={location === item.href}
                  sx={{
                    mb: 1,
                    ...(index === 0   && {
                      color: "white",
                      backgroundColor: (theme) =>
                        `blue!important`,
                    }),
                    ...(index === 1   && {
                      color: "black",
                      backgroundColor: (theme) =>
                        `orange!important`,
                    }),
                    mb: 1,
                    ...(index === 2   && {
                      color: "white",
                      backgroundColor: (theme) =>
                        `green!important`,
                    }),
                    ...(index === 3   && {
                      color: "black",
                      backgroundColor: (theme) =>
                        `yellow!important`,
                    }),
                    mb: 1,
                    ...(index === 4   && {
                      color: "white",
                      backgroundColor: (theme) =>
                        `red!important`,
                    }),
                    ...(index === 5   && {
                      color: "black",
                      backgroundColor: (theme) =>
                        `yellow!important`,
                    }),
                    ...(index === 6   && {
                      color: "white",
                      backgroundColor: (theme) =>
                        `green!important`,
                    }),
                    ...(index === 7   && {
                      color: "white",
                      backgroundColor: (theme) =>
                        `red!important`,
                    }),
                  }}
                >
                  <ListItemIcon>
                    <FeatherIcon
                      style={{
                        color: `${location === "black" ? "black" : ""} `,
                      }}
                      icon={item.icon}
                      width="20"
                      height="20"
                    />
                  </ListItemIcon>

                  <ListItemText onClick={onSidebarClose}>
                    {item.title}
                  </ListItemText>
                </ListItem>
              </NextLink>
            </List>
          ))}
        </List>
      </Box>

      
    </Box>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: "265px",
            border: "0 !important",
            boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: "265px",
          border: "0 !important",
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

Sidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default Sidebar;
