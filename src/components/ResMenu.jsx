import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { ItemUrl } from "../utils/constant";
import useResMenu from "../utils/useResMenu";

function ResMenu() {
  

  const { onno } = useParams();
 
  const item = useResMenu(onno)

  return (
    <div>
      <h2>{item?.title}</h2>
      <div className="specItem">
        <img src={item?.image} />
        <div className="specItem2">
          <h4>Price:{item?.price}</h4>
          <h4>rating : {item?.rating?.rate}/5</h4>
        </div>
      </div>
    </div>
  );
}

export default ResMenu;
