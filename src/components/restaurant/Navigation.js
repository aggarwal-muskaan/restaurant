import React, { useContext, useState } from "react";
import { toggleContext } from "../../contexts/drawer.context";

function Navigation() {
  const showDrawer = useContext(toggleContext);
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <div>
        location
        <input
          type="text"
          placeholder="Search for Restaurants (Press Enter to search)"
          onChange={handleChange}
          onKeyUp={(e) => {
            if (e.key === "Enter") alert(`you pressed Enter after ${input}`);
          }}
        />
        <button onClick={() => showDrawer(true)}>filter</button>
        <button>cart</button>
      </div>
    </div>
  );
}

export default Navigation;
