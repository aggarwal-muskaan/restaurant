import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import FilterDrawer from "./FilterDrawer";
import RestaurantCards from "./RestaurantCards";

function Homepage() {
  const [restr, setRestr] = useState([]);

  useEffect(() => {
    const baseUrl =
      "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants";

    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.allRestaurants);
        setRestr(data.allRestaurants);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navigation />
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
    </div>
  );
}

export default Homepage;
