import React, { useEffect, useState, useContext } from "react";
import RestaurentContainer, {
  higherOrderPromotedRestaurent,
} from "./RestaurentContainer";
import { obj } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const { loggedInUser, setUserInfo } = useContext(UserContext);

  const [foodList, setFoodList] = useState([]);
  const [filteredFoodList, setFilteredFoodList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const url = "https://fakestoreapi.com/products";

  const onlineStatus = useOnlineStatus();

  const ResCardwithPromoted =
    higherOrderPromotedRestaurent(RestaurentContainer);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(url);
        const jsonData = await data.json();
        setFoodList(jsonData);
        setFilteredFoodList(jsonData); // Initialize filtered list with fetched data
        //console.log(jsonData);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [url]); // Run once when the component mounts

  if (foodList.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return <h1>you're offline</h1>;
  }

  const handleSearch = () => {
    const searchedData = foodList.filter((item) =>
      item.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredFoodList(searchedData);
  };

  const handleTopRated = () => {
    const filteredList = foodList.filter((food) => food.rating > 4);
    setFilteredFoodList(filteredList);
  };

  return (
    <div className=" bg-slate-300 m-5 rounded-md mt-15">
      <div className="m-3 p-3 flex justify-between">
        <button
          className="mx-3 m-3 bg-slate-900 text-white rounded-lg w-32 hover:bg-red-300 hover:text-black"
          onClick={handleTopRated}
        >
          {" "}
          top rated cloths
        </button>

        <input
          value={loggedInUser}
          onChange={(e) => setUserInfo(e.target.value)}
        />
        <div className="mx-3 m-3 ">
          <input
            className="rounded-lg"
            type="text"   
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-3 m-3 bg-slate-900 text-white rounded-lg w-32 hover:bg-red-300 hover:text-black"
            onClick={handleSearch}
          >
            {" "}
            search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center ">
        {filteredFoodList.map((res, i) => (
          <Link to={"/resaurant/" + res.id} key={res.id}>
            {res.rating.rate > 4.5 ? (
              <ResCardwithPromoted item={res} />
            ) : (
              <RestaurentContainer item={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
