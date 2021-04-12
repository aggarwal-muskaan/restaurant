import React from "react";

function RestaurantCards({
  restaurantName,
  restaurantImage,
  isOpen,
  restaurantDescription,
}) {
  return (
    <div>
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
