import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { showSidebar, toggleMobileSidebar } from "../contexts/sidebar.context";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { useStyle } from "../styles/ResponsiveDrawerStyle";

function ResponsiveDrawer() {
  const classes = useStyle();
  const mobileOpen = useContext(showSidebar);
  const handleDrawerToggle = useContext(toggleMobileSidebar);
  //   const container =
  // window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={() => handleDrawerToggle(false)}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Sidebar />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <Sidebar />
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default ResponsiveDrawer;
