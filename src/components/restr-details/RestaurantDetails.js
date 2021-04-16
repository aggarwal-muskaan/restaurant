import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useSpinner } from "../../hooks/useSpinner";
import { RESTR_DETAILS_URL, RESTR_MENU_DETAILS } from "../../variables/baseUrl";

import { useStyle } from "../../styles/RestrDetails";

import { ReactComponent as LeftIcon } from "../../assets/restrDetail/leftChevron.svg";
import { ReactComponent as CartIcon } from "../../assets/navigationTop/filter.svg";
import clock from "../../assets/restrDetail/clock.svg";
import phone from "../../assets/restrDetail/phone.svg";
import { ReactComponent as WebIcon } from "../../assets/restrDetail/web.svg";

function RestaurantDetails() {
  let params = useParams();
  let history = useHistory();

  const classes = useStyle();
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
      <div className={classes.RestrPage}>
        <div className={classes.HeaderBtns}>
          <button
            onClick={() => history.goBack()}
            className={`${classes.goBackButton} ${classes.navigationButton}`}
          >
            <LeftIcon />
          </button>

          <button
            className={`${classes.cartButton} ${classes.navigationButton}`}
          >
            <CartIcon />
          </button>
        </div>

        <div className={classes.RestrDetailContainer}>
          <div className={classes.RestrInnerContainer}>
            <h1>{selectedRestr.restaurantName}</h1>
            <section>{selectedRestr.restaurantDescription}</section>
            <div className={classes.RestrInfo}>
              <img src={clock} alt="clock icon" />
              <div>
                <p>{selectedRestr.openingHours.split(",")[0]}</p>
                <p>{selectedRestr.openingHours.split(",")[1]}</p>
              </div>
            </div>
            <div className={classes.RestrInfo}>
              <img src={phone} alt="telephone icon" />
              <span>{selectedRestr.contactNumber}</span>
            </div>
            <div className={`${classes.RestrInfo} ${classes.RestrWebsiteLink}`}>
              <WebIcon />
              <span>{selectedRestr.websiteUrl}</span>
            </div>
          </div>
          <img
            className={classes.RestrImage}
            // width="250px"
            // height="250px"
            src={selectedRestr.restaurantImage}
            alt={selectedRestr.restaurantName}
          />
        </div>
        {!isMenuOfRestr && (
          <h4 className={classes.MenuError}>
            Menu is not provided by the Restaurant.
          </h4>
        )}
      </div>
    ) : (
      <div className={classes.ErrorPage}>
        <h2>
          <em>Restaurant Not Found! </em>
          <span>😢</span>
        </h2>
        <button
          onClick={() => history.push("/")}
          className={classes.ExploreBtn}
        >
          Explore other Restaurants
        </button>
      </div>
    );

  return spinner ? "Loading..." : printData;
}

export default RestaurantDetails;
