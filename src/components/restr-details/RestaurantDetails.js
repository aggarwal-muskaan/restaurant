import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function RestaurantDetails() {
  let params = useParams();
  let history = useHistory();
  const [selectedRestr, setRestr] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const restrDetailsUrl =
    "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails";

  useEffect(() => {
    const getRestaurant = `${restrDetailsUrl}?filter[id]=${params.restrId}`;
    // used template string for filtering restaurant on ID value
    fetch(getRestaurant)
      .then((res) => res.json())
      .then((data) => {
        // stores only first record from API
        const askedRestr = data.restaurantDetails[0];
        // updates state only if the Restaurant found
        askedRestr && setRestr(askedRestr);
        setSpinner(false);
      })
      .catch((err) => console.log(err));
  }, [params]);

  const printData =
    selectedRestr.length !== 0 ? (
      <div>
        <div>
          <button onClick={() => history.goBack()}>back</button>
          <button>cart</button>
        </div>

        <div>
          <div>
            <h3>{selectedRestr.restaurantName}</h3>
            <section>{selectedRestr.restaurantDescription}</section>
            <div>
              icon & <span>{selectedRestr.openingHours}</span>
            </div>
            <div>
              icon & <span>{selectedRestr.contactNumber}</span>
            </div>
            <div>
              icon & <span>{selectedRestr.websiteUrl}</span>
            </div>
          </div>
          <img
            width="250px"
            height="250px"
            src={selectedRestr.restaurantImage}
            alt={selectedRestr.restaurantName}
          />
        </div>
      </div>
    ) : (
      <div>No Such restaurant</div>
    );

  return spinner ? "Loading..." : printData;
}

export default RestaurantDetails;
