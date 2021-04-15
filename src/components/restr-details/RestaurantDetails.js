import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useSpinner } from "../../hooks/useSpinner";
import { RESTR_DETAILS_URL, RESTR_MENU_DETAILS } from "../../variables/baseUrl";

function RestaurantDetails() {
  let params = useParams();
  let history = useHistory();
  const [selectedRestr, setRestr] = useState([]);
  const [isMenuOfRestr, foundMenu] = useState(false);
  const [spinner, handleSpinner] = useSpinner(true);

  const restrDetailsUrl = RESTR_DETAILS_URL;

  useEffect(
    () => {
      const getRestaurant = `${restrDetailsUrl}?filter[id]=${params.restrId}`;
      //* used template string for filtering restaurant on ID value

      const getMenu = `${RESTR_MENU_DETAILS}?filter[restaurantName]=${selectedRestr.restaurantName}`;

      axios.get(getRestaurant).then((res) => {
        // stores only first record from API
        const askedRestr = res.data.restaurantDetails[0];

        // updates state and searches for menu only if the Restaurant found
        if (askedRestr) {
          setRestr(askedRestr);

          axios
            .get(getMenu)
            .then((res) => {
              foundMenu(true);
              console.log(typeof res.data);
            })
            // since this Menu API doesn't have data
            .catch((err) => {
              console.log(err);
            });
        }
        handleSpinner(false);
      });
    },
    //  eslint-disable-next-line
    [params]
  );

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
        {!isMenuOfRestr && <h4>Menu is not provided by Restaurant.</h4>}
      </div>
    ) : (
      <div>
        <p>No Such Restaurant</p>
        <button onClick={() => history.push("/")}>
          Explore other Restaurants
        </button>
      </div>
    );

  return spinner ? "Loading..." : printData;
}

export default RestaurantDetails;
