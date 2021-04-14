import { useState, useEffect } from "react";
import axios from "axios";
import { useSpinner } from "./useSpinner";

function useBaseUrl(init) {
  const [allRestr, setAllRestr] = useState(init);
  const [loading, handleLoading] = useSpinner(true);

  useEffect(() => {
    const baseUrl =
      "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants";

    axios.get(baseUrl).then((res) => {
      handleLoading(false);
      setAllRestr(res.data.allRestaurants);
    });
  }, []);
  return [allRestr, loading];
}

export { useBaseUrl };
