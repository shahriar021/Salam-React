import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurentContainer = ({ item }) => {
  const { type, rating, cuisine, delivery_time } = item;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <div className="w-40 h-[32rem] m-2 p-4  rounded-md text-clip overflow-hidden bg-white hover:bg-slate-400">
        <div className="w-30">
          <img src={item.image} className="rounded-lg" />
        </div>
        <div className="">
          {<h5 className="font-bold text-lg">{item.category}</h5>}
          <h5 className="text-sm font-serif">{rating.rate}/5</h5>
          <h5 className="text-sm font-serif">{item.description}</h5>
          <h5 className="text-sm font-serif">{item.price}</h5>
          <h5 className="text-sm font-serif">{loggedInUser}</h5>
        </div>
        ;
      </div>
    </div>
  );
};

export const higherOrderPromotedRestaurent = (RestaurentContainer) => {
  return (item) => {
    console.log(item, "item");
    return (
      <>
        <label className="absolute text-white bg-black m-2 p-2 rounded-lg">
          promoted
        </label>
        <RestaurentContainer {...item} />
      </>
    );
  };
};

export default RestaurentContainer;
