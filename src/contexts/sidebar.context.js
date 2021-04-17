import { createContext } from "react";
import { useDrawer } from "../hooks/useDrawer";

const showSidebar = createContext();
const toggleMobileSidebar = createContext();

function Sidebar(props) {
  const [state, setState] = useDrawer(false);
  return (
    <showSidebar.Provider value={state}>
      <toggleMobileSidebar.Provider value={setState}>
        {props.children}
      </toggleMobileSidebar.Provider>
    </showSidebar.Provider>
  );
}

export { showSidebar };
export { toggleMobileSidebar };
export { Sidebar };
