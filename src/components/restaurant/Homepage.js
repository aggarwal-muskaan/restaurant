import React, { useContext } from "react";
import { useBaseUrl } from "../../hooks/useBaseUrl";
import { restaurantData } from "../../contexts/filterRest.context";

import Skeleton2 from "../content-placeholder/Skeleton2";
import Navigation from "./Navigation";
import Category from "./Category";
import FilterDrawer from "./FilterDrawer";
import RestaurantCards from "./RestaurantCards";

import { useStyle } from "../../styles/HomepageStyle";
function Homepage() {
  const classes = useStyle();

  const [allRestr, loading] = useBaseUrl([]);
  const filterRest = useContext(restaurantData);

  let errMessage;
  let restr;
  if (typeof filterRest === "string") {
    errMessage = filterRest;
    restr = allRestr;
  } else restr = filterRest.length !== 0 ? filterRest : allRestr;

  return (
    <div className={classes.Homepage}>
      <Navigation />
      {loading ? (
        <Skeleton2 />
      ) : (
        <>
          <Category />

          {/* shows message if searched for non-existing restaurant in input field */}
          {errMessage && <h3 className={classes.showNotFound}>{errMessage}</h3>}

          <div className={classes.HomepageRestr}>
            <h2>Restaurants</h2>
            <div className={classes.RestrCardList}>
              {restr.map((r) => (
                <RestaurantCards {...r} key={r.id} />
              ))}
            </div>
          </div>
          <FilterDrawer />
        </>
      )}
    </div>
  );
}

export default Homepage;
