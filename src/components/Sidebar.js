import React from "react";
import { NavLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useStyle } from "../styles/Sidebar.js";
import logo from "../assets/sidebar/logo.svg";

import Home from "../assets/sidebar/Home.svg";
import Document from "../assets/sidebar/Document.svg";
import Notifications from "../assets/sidebar/Notifications.svg";
import Support from "../assets/sidebar/Support.svg";
import Settings from "../assets/sidebar/Settings.svg";

function Sidebar() {
  const classes = useStyle();

  const tabs = [
    {
      icon: Home,
      text: "Home",
      path: "/",
    },
    {
      icon: Document,
      text: "Orders",
      path: "/page/soon",
    },
    {
      icon: Notifications,
      text: "Notification",
      path: "/page/soon",
    },
    {
      icon: Support,
      text: "Help & Support",
      path: "/page/soon",
    },
    {
      icon: Settings,
      text: "Settings",
      path: "/page/soon",
    },
  ];

  return (
    <div className={classes.sidebar}>
      <div className={classes.logoContainer}>
        <Grid
          container
          wrap="nowrap"
          spacing={1}
          alignItems="center"
          // justify="center"
        >
          <Grid item>
            <img src={logo} alt="logo" />
          </Grid>
          <Grid item xl>
            <h3>Pomo & co</h3>
          </Grid>
        </Grid>
      </div>

      <div className={classes.navigationContainer}>
        {tabs.map((t) => (
          <NavLink
            exact
            to={t.path}
            key={t.text}
            className={classes.navlinkTab}
            activeClassName={classes.activeNavlink}
          >
            <Grid
              container
              wrap="nowrap"
              spacing={3}
              className={classes.navigationTab}
            >
              <Grid item>
                <img src={t.icon} alt={t.text} />
              </Grid>
              <Grid item xl>
                <Typography className={classes.navlinkText}>
                  {t.text}
                </Typography>
              </Grid>
            </Grid>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
