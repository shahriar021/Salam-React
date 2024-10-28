// import React, { useEffect, useState } from "react";
// import { json, useParams } from "react-router-dom";
// import { ItemUrl } from "../utils/constant";
// import useResMenu from "../hooks/useResMenu";

// function ResMenu() {
//   const { onno } = useParams();

//   const item = useResMenu(onno);

//   return (
//     <div>
//       <h2 className="px-3 text-5xl text-red-300 text-center">{item?.title}</h2>
//       <div className="flex justify-around">
//         <img src={item?.image} />
//         <div className="flex items-center m-5 p-5  px-5 justify-center">
//           <h4 className="px-3 text-5xl text-red-300">Price:{item?.price}</h4>
//           <h4 className="px-3 text-5xl text-emerald-400">
//             rating : {item?.rating?.rate}/5
//           </h4>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResMenu;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useResMenu from "../hooks/useResMenu";
import ResCategory from "./ResCategory"; // Import ResCategory

function ResMenu() {
  const { onno } = useParams();
  const item = useResMenu(onno);

  return (
    <div>
      <h2 className="px-3 text-5xl text-red-300 text-center">{item?.title}</h2>
      <div className="flex justify-around">
        <img src={item?.image} alt="Item" />
        <div className="flex items-center m-5 p-5 px-5 justify-center">
          <h4 className="px-3 text-5xl text-red-300">Price: {item?.price}</h4>
          <h4 className="px-3 text-5xl text-emerald-400">
            Rating: {item?.rating?.rate}/5
          </h4>
        </div>
      </div>
      {/* Pass item details to ResCategory */}
      <ResCategory item={item} />
    </div>
  );
}

export default ResMenu;
