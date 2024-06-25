import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

function ResMenu() {
  const [item, setItem] = useState(null);

  const { onno } = useParams();
  console.log(onno);
  useEffect(() => {
    getSpecificItem = async () => {
      const data = await fetch("https://fakestoreapi.com/products/" + onno);
      const jsonData = await data.json();
      setItem(jsonData);
    };
    getSpecificItem();
  }, []);

  return (
    <div>
      <h2>{item?.title}</h2>
      <div className="specItem">
        <img src={item?.image} />
        <h4>Price:{item?.price}</h4>
        <h4>rating : {item?.rating?.rate}/5</h4>
      </div>
    </div>
  );
}

export default ResMenu;
