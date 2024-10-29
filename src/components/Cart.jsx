import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Cart items:", cartItems);

  return (
    <div className="text-center m-50 p-50">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <ItemList key={index} item={item} /> // Render ItemList for each cart item
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
