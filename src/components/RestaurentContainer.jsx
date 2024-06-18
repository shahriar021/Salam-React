import React from "react";

const RestaurentContainer = ({ item }) => {
  const { type, rating, cuisine, delivery_time } = item;
  return (
    <div>
      <div className="restaurentCard">
        <div className="restaurentImg">
          <img src={item.image} className="cardImage" />
        </div>
        <div>
          {<h5 className="resName">{item.category}</h5>}
          <h5 className="star">{rating.rate}/5</h5>
          <h5 className="cuisine">{item.description}</h5>
          <h5 className="time">{item.price}</h5>
        </div>
        ;
      </div>
    </div>
  );
};

export default RestaurentContainer;
