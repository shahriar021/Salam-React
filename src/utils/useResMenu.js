import { useEffect, useState } from "react";
import { ItemUrl } from "./constant";

const useResMenu = (onno) => {
  const [item, setItem] = useState(null);
  useEffect(() => {
    const getSpecifitItem = async () => {
      const data = await fetch(ItemUrl + onno);
      const jsonData = await data.json();
      setItem(jsonData);
      console.log(jsonData);
    };
    getSpecifitItem();
  }, []);

  return item;
};

export default useResMenu;
