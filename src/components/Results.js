import classes from "./Results.module.css";
import Item from "./Item";
import Pagination from "./Pagination";
import itemList from "../store/list";
import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";

const Results = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [results, setResults] = useState("");
  const params = useParams();
  const location = useLocation();

  let resultsNumber = results.length || 0;

  useEffect(() => {
    if (location.pathname.includes("/results/search")) {
      setResults(
        itemList.filter((item) =>
          item.name.toLowerCase().includes(params.searchValue.toLowerCase())
        )
      );
      setIsSearch(true);
    } else if (location.pathname.includes("/results/category")) {
      setResults(
        itemList.filter((item) => item.category === params.categoryValue)
      );
      setIsCategory(true);
    }
  }, [location.pathname, params.searchValue, params.categoryValue]);

  return (
    <div className={classes.conteiner}>
      <p className={classes.amount}>{`${resultsNumber} ogłoszenia`}</p>
      {(isSearch || isCategory) &&
        results.map((item) => {
          return (
            <Item
              key={item.name}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      <div className={classes.pagination}>
        <Pagination />
      </div>
    </div>
  );
};

export default Results;
