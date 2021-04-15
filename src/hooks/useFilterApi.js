import { useReducer } from "react";
import { allRestaurantsData } from "./useBaseUrl";
// import { ALL_RESTR_URL } from "../variables/baseUrl";

function useFilterApi(init) {
  const [filteredRestr, dispatch] = useReducer(reducer, init);
  return [filteredRestr, dispatch];
}

function reducer(currState, action) {
  switch (action.type) {
    case "filterByRestaurantName": {
      const arr = allRestaurantsData.filter((r) =>
        r.restaurantName.toLowerCase().includes(action.value.toLowerCase())
      );

      if (arr.length === 0) {
        const errMessage = `No match found for ${action.value}`;
        return errMessage;
      } else return arr;
    }

    case "filterByCategory": {
      const arr = allRestaurantsData.filter((r) =>
        r.restaurantCategory.includes(action.value)
      );
      return arr;
    }

    case "filterByCuisine":
      return currState;

    default:
      return currState;
  }
}

export { useFilterApi };
