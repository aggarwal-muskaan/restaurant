import { useState, useEffect } from "react";
import axios from "axios";
import { useSpinner } from "./useSpinner";
import { ALL_RESTR_URL } from "../variables/baseUrl";

function useBaseUrl(init) {
  const [allRestr, setAllRestr] = useState(init);
  const [loading, handleLoading] = useSpinner(true);

  useEffect(
    () => {
      const baseUrl = ALL_RESTR_URL;
      axios.get(baseUrl).then((res) => {
        handleLoading(false);
        setAllRestr(res.data.allRestaurants);
      });
    },
    // eslint-disable-next-line
    []
  );
  return [allRestr, loading];
}

export { useBaseUrl };
