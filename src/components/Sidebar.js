import React from "react";
import "../styles/Sidebar.css";
import logo from "../assets/sidebar/logo.svg";

import Home from "../assets/sidebar/Home.svg";
import Document from "../assets/sidebar/Document.svg";
import Notifications from "../assets/sidebar/Notifications.svg";
import Support from "../assets/sidebar/Support.svg";
import Settings from "../assets/sidebar/Settings.svg";

function Sidebar() {
  const tabs = [
    {
      icon: Home,
      text: "Home",
    },
    {
      icon: Document,
      text: "Orders",
    },
    {
      icon: Notifications,
      text: "Notification",
    },
    {
      icon: Support,
      text: "Help & Support",
    },
    {
      icon: Settings,
      text: "Settings",
    },
  ];

  return (
    <div className="sidebar">
      <div>
        <img src={logo} alt="logo" />
        <span>Pomo & co</span>
      </div>
      <table>
        <thead>
          {tabs.map((t) => (
            <tr key={t.text}>
              <td>
                <img src={t.icon} alt={t.text} />
              </td>
              <td>
                <span>{t.text}</span>
              </td>
            </tr>
          ))}
        </thead>
      </table>
      <div></div>
    </div>
  );
}

export default Sidebar;
