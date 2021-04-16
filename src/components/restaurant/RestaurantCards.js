import React from "react";
import { useStyle } from "../../styles/RestaurantCards";
import { useHistory } from "react-router-dom";

import TextClamp from "react-string-clamp";

function RestaurantCards({
  id,
  restaurantName,
  restaurantImage,
  isOpen,
  restaurantDescription,
}) {
  //routing property to redirect within the application
  const history = useHistory();
  const classes = useStyle();

  return (
    <div onClick={() => history.push(`/${id}`)} className={classes.CardInfo}>
      <img
        src={restaurantImage}
        alt={`${restaurantName}`}
        width="230px"
        height="230px"
        className={classes.CardImage}
      />
      <div className={classes.CardHeader}>
        <h4>{restaurantName}</h4>

        <span
          className={
            `${classes.RestrLabel} ` + (!isOpen && `${classes.RestrClosed}`)
          }
        >
          {isOpen ? "Open Now" : "Closed"}
        </span>
      </div>
      <TextClamp
        element="p"
        lines="3"
        className={classes.CardContent}
        text={restaurantDescription}
      />
    </div>
  );
}

export default RestaurantCards;
