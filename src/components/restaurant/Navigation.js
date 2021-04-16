import React, { useContext, useState } from "react";
import { toggleContext } from "../../contexts/drawer.context";
import { filterRestr } from "../../contexts/filterRest.context";
import { useStyle } from "../../styles/Navigation";

import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";

import { ReactComponent as Location } from "../../assets/navigationTop/location.svg";
import { ReactComponent as MenuIcon } from "../../assets/navigationTop/menu.svg";
import { ReactComponent as SearchIcon } from "../../assets/navigationTop/search.svg";
import { ReactComponent as FilterIcon } from "../../assets/navigationTop/cart.svg";
import { ReactComponent as CartIcon } from "../../assets/navigationTop/filter.svg";

function Navigation() {
  const showDrawer = useContext(toggleContext);
  const dispatch = useContext(filterRestr);
  const [input, setInput] = useState("");

  const classes = useStyle();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Grid
      container
      // spacing={9}
      alignItems="center"
      justify="space-between"
      className={classes.NavigationTop}
    >
      <Grid item className={classes.Location}>
        <div className={classes.LocationName}>
          <Location />
          <h5>Da Otto</h5>
        </div>
        <MenuIcon />
      </Grid>

      <Grid item className={classes.TopRightNavigation}>
        <div className={classes.InputContainer}>
          <div>
            <SearchIcon />
          </div>
          <InputBase
            value={input}
            onChange={handleChange}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                dispatch({ type: "filterByRestaurantName", value: input });
                setInput("");
              }
            }}
            placeholder="Search for Restaurants (Press Enter to search)"
            className={classes.inputInput}
          />
        </div>

        <button
          onClick={() => showDrawer(true)}
          className={`${classes.filterButton} ${classes.navigationButton}`}
        >
          <FilterIcon />
        </button>
        <button className={`${classes.cartButton} ${classes.navigationButton}`}>
          <CartIcon />
        </button>
      </Grid>
    </Grid>
  );
}

export default Navigation;
