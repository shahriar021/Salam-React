import React, { useEffect, useState } from "react";
import RestaurentContainer from "./RestaurentContainer";
import { obj } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [foodList, setFoodList] = useState([]);
  const [filteredFoodList, setFilteredFoodList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(url);
        const jsonData = await data.json();
        setFoodList(jsonData);
        setFilteredFoodList(jsonData); // Initialize filtered list with fetched data
        console.log(jsonData);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [url]); // Run once when the component mounts

  if (foodList.length === 0) {
    return <Shimmer />;
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
    <div className="mainBody">
      <div className="search">
        <button onClick={handleTopRated}> top rated restro</button>
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleSearch}> search</button>
        </div>
      </div>
      <div className="resContainer">
        {filteredFoodList.map((res, i) => (
          <RestaurentContainer key={i} item={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
