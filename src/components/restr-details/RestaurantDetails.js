import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function RestaurantDetails() {
  let params = useParams();
  let history = useHistory();
  const [selectedRestr, setRestr] = useState([]);

  const restrDetailsUrl =
    "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails";

  useEffect(() => {
    const getRestaurant = `${restrDetailsUrl}?filter[id]=${params.restrId}`;
    fetch(getRestaurant)
      .then((res) => res.json())
      // stores only first record from API
      .then((data) => setRestr(data.restaurantDetails[0]))
      .catch((err) => console.log(err));
  }, [params]);

  return selectedRestr.length !== 0 ? (
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
}

export default RestaurantDetails;
