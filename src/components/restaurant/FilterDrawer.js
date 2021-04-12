import React, { useContext } from "react";
import { openContext, toggleContext } from "../../contexts/drawer.context";
import Drawer from "@material-ui/core/Drawer";

function FilterDrawer() {
  const val = useContext(openContext);
  const showDrawer = useContext(toggleContext);
  return (
    <Drawer anchor="right" open={val} onClose={() => showDrawer(false)}>
      search filters
    </Drawer>
  );
}

export default FilterDrawer;
