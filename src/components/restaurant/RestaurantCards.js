import React from "react";
import { useHistory } from "react-router-dom";

function RestaurantCards({
  id,
  restaurantName,
  restaurantImage,
  isOpen,
  restaurantDescription,
}) {
  //routing property to redirect within the application
  const history = useHistory();

  return (
    <div onClick={() => history.push(`/${id}`)}>
      <img
        src={restaurantImage}
        alt={`${restaurantName}`}
        width="230px"
        height="230px"
      />
      <div>
        <h4>{restaurantName}</h4>
        <span>{isOpen ? "Open Now" : "Closed"}</span>
      </div>
      <p>{restaurantDescription}</p>
    </div>
  );
}

export default RestaurantCards;
