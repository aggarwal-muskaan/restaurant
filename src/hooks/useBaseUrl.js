import { useState, useEffect } from "react";
import axios from "axios";
import { useSpinner } from "./useSpinner";
import { ALL_RESTR_URL } from "../variables/baseUrl";

let allRestaurantsData;

function useBaseUrl(init) {
  const [allRestr, setAllRestr] = useState([]);
  const [loading, handleLoading] = useSpinner(true);

  useEffect(
    () => {
      const baseUrl = ALL_RESTR_URL;
      axios.get(baseUrl).then((res) => {
        handleLoading(false);
        setAllRestr(res.data.allRestaurants);
        allRestaurantsData = allRestr;
      });
    },
    // eslint-disable-next-line
    []
  );
  return [allRestr, loading];
}

export { useBaseUrl };
export { allRestaurantsData };
