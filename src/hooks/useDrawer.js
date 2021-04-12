import { useState } from "react";

function useDrawer() {
  const [state, setState] = useState(false);
  const handleDrawer = (val) => {
    setState(val);
  };
  return [state, handleDrawer];
}

export { useDrawer };
