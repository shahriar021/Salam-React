import React from "react";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ItemList = ({ item }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  const hadleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  // Receive item prop
  return (
    <div>
      {/* Render item details */}
      <h4 className="text-2xl">Item Name: {item?.title}</h4>
      <p className="text-lg">Description: {item?.description}</p>
      <button onClick={() => hadleAddItem(item)}>Add+</button>
    </div>
  );
};

export default ItemList;
