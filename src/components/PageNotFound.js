import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as MenuIcon } from "../assets/navigationTop/toggle.svg";
import { toggleMobileSidebar } from "../contexts/sidebar.context";
import { makeStyles } from "@material-ui/core/styles";
import breakpoints from "../variables/breakpoint";

const useStyle = makeStyles({
  menuButton: {
    [breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
});

function PageNotFound() {
  const handleDrawerToggle = useContext(toggleMobileSidebar);
  const classes = useStyle();
  return (
    <div style={{ width: "100%" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => handleDrawerToggle(true)}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <h2 style={{ textAlign: "center", color: "green" }}>Coming Soon...</h2>
    </div>
  );
}

export default PageNotFound;
