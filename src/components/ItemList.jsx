import React from "react";

export default function ItemList({ item }) {
  // Receive item prop
  return (
    <div>
      {/* Render item details */}
      <h4 className="text-2xl">Item Name: {item?.title}</h4>
      <p className="text-lg">Description: {item?.description}</p>
    </div>
  );
}
