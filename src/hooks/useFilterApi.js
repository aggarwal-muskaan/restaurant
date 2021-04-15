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

    case "filterByCuisine": {
      if (action.value.length === 0 || action.value.includes("All"))
        return allRestaurantsData;
      else {
        const arr = allRestaurantsData.filter((r) => {
          // since restaurantCuisine is not an array, therefore separating each cuisine with ',' as delimiter
          const newArr = r.restaurantCuisine.split(",");
          let flag = false;

          for (let i = 0; i < newArr.length; i++) {
            // removing characters('',[,]) from each element
            const words = newArr[i].match(/[a-zA-Z]+/g);
            // combining words into a single cuisine as match() return an array
            const combineWords = words.join(" ");
            // include() is case-sensitive
            if (action.value.includes(combineWords)) {
              flag = true;
            }
          }
          if (flag) return r;
          // flag && return r
        });
        return arr;
      }
    }

    default:
      return currState;
  }
}

export { useFilterApi };
