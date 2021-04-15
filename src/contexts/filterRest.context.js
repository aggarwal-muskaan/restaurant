import { createContext } from "react";
import { useFilterApi } from "../hooks/useFilterApi";

const restaurantData = createContext();
const filterRestr = createContext();

function ApplyFilter(props) {
  const [state, dispatch] = useFilterApi([]);

  return (
    <restaurantData.Provider value={state}>
      <filterRestr.Provider value={dispatch}>
        {props.children}
      </filterRestr.Provider>
    </restaurantData.Provider>
  );
}

export { restaurantData };
export { filterRestr };
export { ApplyFilter };
