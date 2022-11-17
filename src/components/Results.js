import classes from "./Results.module.css";
import Item from "./Item";
import { useLocation, useParams } from "react-router";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getAllItems } from "../lib/api";

import { imageList } from "../Resource/imageMenager";

const Results = () => {
  let params = useParams();
  const location = useLocation();
  let resultsNumber = 0;
  let results;

  const {
    sendRequest,
    status,
    data: loadedItems,
    error,
  } = useHttp(getAllItems, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let info;
  if (status === "pending") {
    info = <p>Wczytywanie ogłoszeń</p>;
  }

  if (error) {
    info = <p>Wystąpił błąd</p>;
  }

  if (status === "completed" && (!loadedItems || loadedItems.length === 0)) {
    info = <p>Brak przedmiotów</p>;
  }

  if (status === "completed") {
    if (location.pathname.includes("/results/search")) {
      results = loadedItems.filter((item) =>
        item.name.toLowerCase().includes(params.searchValue.toLowerCase())
      );
    } else if (
      location.pathname.includes("/results/category/Niedawno dodane")
    ) {
      results = loadedItems.sort(
        (item1, item2) => Date.parse(item2.date) - Date.parse(item1.date)
      );
    } else if (location.pathname.includes("/results/category/Wyróżnione")) {
      const favoriteCategory = "Rolnictwo";
      results = loadedItems.filter(
        (item) => item.category === favoriteCategory
      );
    } else if (location.pathname.includes("/results/category")) {
      results = loadedItems.filter(
        (item) => item.category === params.categoryValue
      );
    }

    if (location.search.includes("sort=ASC")) {
      results = results.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (location.search.includes("sort=DESC")) {
      results = results.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    if (location.search.includes("price=")) {
      let value = location.search.split("=");
      let value2 = value[1].split("&");
      let priceValue = value2[0].split("-");

      if (
        (priceValue[0].includes("+") || priceValue[0] === "") &&
        (priceValue[1].includes("+") || priceValue[1] === "")
      ) {
      } else if (priceValue[0].includes("+") || priceValue[0] === "") {
        results = results.filter((item) => item.price <= priceValue[1]);
      } else if (priceValue[1].includes("+") || priceValue[1] === "") {
        results = results.filter((item) => item.price >= priceValue[0]);
      } else {
        results = results.filter(
          (item) => item.price <= priceValue[1] && item.price >= priceValue[0]
        );
      }
    }
    resultsNumber = results.length || 0;
  }

  return (
    <div className={classes.conteiner}>
      <p className={classes.amount}>{`${resultsNumber} ogłoszenia`}</p>
      {info}
      {status === "completed" &&
        results.map((item) => {
          const image = imageList.find((image) => image.name === item.image);
          return (
            <Item
              key={item.name}
              image={image.image}
              name={item.name}
              price={item.price}
              id={item.id}
            />
          );
        })}
    </div>
  );
};

export default Results;
