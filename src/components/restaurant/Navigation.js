import React, { useContext } from "react";
import { toggleContext } from "../../contexts/drawer.context";
function Navigation() {
  const showDrawer = useContext(toggleContext);
  return (
    <div>
      <div>
        location
        <input type="text" />
        <button onClick={() => showDrawer(true)}>filter</button>
        <button>cart</button>
      </div>
    </div>
  );
}

export default Navigation;
