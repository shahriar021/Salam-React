import React from "react";
import ItemList from "./ItemList"; // Import ItemList

export default function ResCategory({ item }) {
  // Receive item as a prop
  return (
    <div>
      <h3 className="text-3xl text-blue-500">Category: {item?.category}</h3>
      {/* Pass item data to ItemList */}
      <ItemList item={item} />
    </div>
  );
}
