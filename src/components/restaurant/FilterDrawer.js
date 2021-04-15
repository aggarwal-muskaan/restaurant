import { useToggle } from "../../hooks/useToggle";
import React, { useState, useContext } from "react";
import { filterRestr } from "../../contexts/filterRest.context";
import { openContext, toggleContext } from "../../contexts/drawer.context";

import Drawer from "@material-ui/core/Drawer";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import close from "../../assets/drawer/close.svg";
import fire from "../../assets/drawer/fire.svg";
import dropdown from "../../assets/drawer/dropdown.svg";

function FilterDrawer() {
  const val = useContext(openContext);
  const dispatch = useContext(filterRestr);
  const showDrawer = useContext(toggleContext);
  const [click, toggleClick] = useToggle(true);
  const [myCuisines, setCuisines] = useState(["All"]);

  const handleArray = (event, newCuisines) => {
    setCuisines(newCuisines);
  };
  const cuisines = [
    "All",
    "Fast food",
    "American food",
    "Pizza",
    "Asian",
    "Dessert",
    "Mexican",
    "Breakfast",
  ];

  const handleApplyFilters = () => {
    dispatch({ type: "filterByCuisine", value: myCuisines });
    showDrawer(false);
  };
  return (
    <Drawer anchor="right" open={val} onClose={() => showDrawer(false)}>
      <div>
        <h2>Search Filters</h2>
        <img src={close} alt="close icon" />
      </div>

      <div>
        <h2>Sort by</h2>
        <ToggleButton value="check" selected={click} onChange={toggleClick}>
          <div>
            <img src={fire} alt="open icon" />
          </div>
          <span className={click ? "opened" : "close"}>open</span>
        </ToggleButton>
      </div>

      <div>
        <h2>Cuisine</h2>

        <ToggleButtonGroup
          value={myCuisines}
          onChange={handleArray}
          aria-label="cuisines"
        >
          {cuisines.map((c) => (
            <ToggleButton value={c} key={c}>
              {c}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <div>
          <div>See more</div>
          <img src={dropdown} alt="dropdown icon" />
        </div>
      </div>

      <button onClick={handleApplyFilters}>Apply filters</button>
    </Drawer>
  );
}

export default FilterDrawer;
