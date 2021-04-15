import React, { useContext } from "react";
import { useBaseUrl } from "../../hooks/useBaseUrl";
import { restaurantData } from "../../contexts/filterRest.context";
import Navigation from "./Navigation";
import Category from "./Category";
import FilterDrawer from "./FilterDrawer";
import RestaurantCards from "./RestaurantCards";

function Homepage() {
  const [allRestr, loading] = useBaseUrl([]);
  const filterRest = useContext(restaurantData);
  const restr = filterRest.length !== 0 ? filterRest : allRestr;

  return (
    <div>
      <Navigation />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <Category />
          <div>
            <h2>Restaurants</h2>
            <div>
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
