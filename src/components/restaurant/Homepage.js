// import React, { useState } from "react";
import { useBaseUrl } from "../../hooks/useBaseUrl";
import Navigation from "./Navigation";
import FilterDrawer from "./FilterDrawer";
import RestaurantCards from "./RestaurantCards";

function Homepage() {
  const [restr, loading] = useBaseUrl([]);

  return (
    <div>
      <Navigation />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div>
            <h3>Category</h3>
            <div>
              <div>
                <p>Baked</p>
              </div>
              <div>
                <p>Sweet</p>
              </div>
              <div>
                <p>Hot Dish</p>
              </div>
              <div>
                <p>Fast Food</p>
              </div>
              <div>
                <p>Salads</p>
              </div>
            </div>
          </div>
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
