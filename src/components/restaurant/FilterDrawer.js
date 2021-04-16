import { useToggle } from "../../hooks/useToggle";
import React, { useState, useContext } from "react";
import { filterRestr } from "../../contexts/filterRest.context";
import { openContext, toggleContext } from "../../contexts/drawer.context";
import { useStyle } from "../../styles/FilterDrawer";

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

  const classes = useStyle();

  const [click, toggleClick] = useToggle(true);
  // manages 'selected cuisines' by user
  const [myCuisines, setCuisines] = useState(["All"]);

  const handleArray = (event, newCuisines) => {
    setCuisines(newCuisines);
  };

  //hardcoded values of cuisines
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
      <div className={classes.FilterDrawerContainer}>
        <div className={classes.DrawerInnerContainer}>
          <div className={classes.DrawerHeader}>
            <h2>Search filters</h2>
            <img src={close} alt="close icon" onClick={handleApplyFilters} />
          </div>

          <div>
            <h2>Sort by</h2>
            <ToggleButton
              value="check"
              selected={click}
              onChange={toggleClick}
              className={
                `${classes.openToggleButton} ` +
                (click && `${classes.activeToggleButton}`)
              }
            >
              <div
                className={
                  `${classes.fireIconContainer} ` +
                  (click && `${classes.activeFireIcon}`)
                }
              >
                <img src={fire} alt="open icon" />
              </div>
              <p
                className={
                  `${classes.openText} ` +
                  (click && `${classes.activeOpenText}`)
                }
              >
                {click ? "open" : "closed"}
              </p>
            </ToggleButton>
          </div>

          <div>
            <h2>Cuisine</h2>

            <ToggleButtonGroup
              value={myCuisines}
              onChange={handleArray}
              aria-label="cuisines"
              className={classes.CuisinesContainer}
            >
              {cuisines.map((c) => (
                <ToggleButton
                  value={c}
                  key={c}
                  className={
                    `${classes.openToggleButton} ` +
                    (myCuisines.includes(c) && `${classes.activeToggleButton}`)
                  }
                >
                  <button
                    className={
                      `${classes.cuisineBtn} ` +
                      (myCuisines.includes(c) && `${classes.activeCuisineBtn}`)
                    }
                  >
                    {c}
                  </button>
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            <div className={classes.seeMore}>
              <p>See more</p>
              <img src={dropdown} alt="dropdown icon" />
            </div>
          </div>
        </div>

        <button onClick={handleApplyFilters} className={classes.ApplyButton}>
          <h3>Apply filters</h3>
        </button>
      </div>
    </Drawer>
  );
}

export default FilterDrawer;
