import React, { useContext, useState } from "react";
import { toggleContext } from "../../contexts/drawer.context";
import { filterRestr } from "../../contexts/filterRest.context";

function Navigation() {
  const showDrawer = useContext(toggleContext);
  const dispatch = useContext(filterRestr);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <div>
        location
        <input
          value={input}
          type="text"
          placeholder="Search for Restaurants (Press Enter to search)"
          onChange={handleChange}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              dispatch({ type: "filterByRestaurantName", value: input });
              // alert(`you pressed Enter after ${input}`);
              setInput("");
            }
          }}
        />
        <button onClick={() => showDrawer(true)}>filter</button>
        <button>cart</button>
      </div>
    </div>
  );
}

export default Navigation;
