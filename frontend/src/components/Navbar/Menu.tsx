import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import MuiMenu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import routes, { MyRouteProps } from "../../routes";
import { Link } from "react-router-dom";

const listRoutes = {
  dashboard: "Dashboard",
  "categories.list": "Categorias",
  "cast_members.list": "Membros de elenco",
  "genres.list": "Gêneros",
};
const menuRoutes = routes.filter((route) =>
  Object.keys(listRoutes).includes(route.name)
);

const Menu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = (event: any) => setAnchorEl(event.currentTarget);
  const open = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>

      <MuiMenu
        id="menu-appbar"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        getContentAnchorEl={null}
      >
        {Object.keys(listRoutes).map((routeName, key) => {
          const route = menuRoutes.find(
            (route) => route.name === routeName
          ) as MyRouteProps;
          return (
            <MenuItem
              key={key}
              component={Link}
              to={route.path as string}
              onClick={handleClose}
            >
              {listRoutes[routeName]}
            </MenuItem>
          );
        })}
      </MuiMenu>
    </>
  );
};

export default Menu;
