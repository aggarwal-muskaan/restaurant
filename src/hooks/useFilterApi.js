import { useState, useEffect } from "react";
import axios from "axios";
import { ALL_RESTR_URL } from "../variables/baseUrl";

function useFilterApi(init) {
  const [filterRestr, setState] = useState(init);
  const [newR, setNew] = useState([]);
  useEffect(() => {
    const newUrl = `${ALL_RESTR_URL}?filter[${filterRestr.filterBy}]=${filterRestr.value}`;
    // console.log("huree", newUrl);
    axios.get(newUrl).then((res) => {
      setNew(res.data.allRestaurants);
      // console.log(newR);
    });
  }, [filterRestr]);
  return [newR, setState];
}

export { useFilterApi };
