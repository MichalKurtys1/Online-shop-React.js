import {
  faCheck,
  faSortAmountAsc,
  faSortAmountDesc,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import classes from "./Filtr.module.css";
import DropDownList from "./ReUsed/DropDownList";
import Input from "./ReUsed/Input";

const categories = [
  { name: "Motoryzacja" },
  { name: "Elektronika" },
  { name: "Odzież" },
  { name: "Książki" },
  { name: "Rolnictwo" },
  { name: "Dom i Ogród" },
  { name: "Niedawno dodane" },
  { name: "Wyróżnione" },
];

const Filtr = (props) => {
  const navigator = useNavigate();
  const params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [sortDESC, setSortDESC] = useState(false);
  const [sortASC, setSortASC] = useState(false);
  const [categoryState, setCategoryState] = useState(false);
  const [categoryInputValue, setCategoryInputValue] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  useEffect(() => {
    setSortASC(false);
    setSortDESC(false);
    setPriceFrom("");
    setPriceTo("");
  }, [location.pathname]);

  const sortHandlerDESC = () => {
    if (sortDESC) {
      setSortASC(false);
      setSortDESC(false);
      if (priceFrom !== "" || priceTo !== "") {
        setSearchParams({
          price: `${priceFrom}-${priceTo}`,
        });
      }
    } else {
      setSortASC(false);
      setSortDESC(true);

      if (priceFrom !== "" || priceTo !== "") {
        setSearchParams({
          price: `${priceFrom}-${priceTo}`,
          sort: "DESC",
        });
      } else {
        setSearchParams({
          sort: "DESC",
        });
      }
    }
  };

  const sortHandlerASC = () => {
    if (sortASC) {
      setSortASC(false);
      setSortDESC(false);
      if (priceFrom !== "" || priceTo !== "") {
        setSearchParams({
          price: `${priceFrom}-${priceTo}`,
        });
      }
    } else {
      setSortASC(true);
      setSortDESC(false);

      if (priceFrom !== "" || priceTo !== "") {
        setSearchParams({
          price: `${priceFrom}-${priceTo}`,
          sort: "ASC",
        });
      } else {
        setSearchParams({
          sort: "ASC",
        });
      }
    }
  };

  const categoryHandler = () => {
    if (categoryState) {
      setCategoryState(false);
      navigator(`/results/category/${categoryInputValue}`);
    } else {
      setCategoryState(true);
    }
  };

  const changeCategoryHandler = (category) => {
    setCategoryInputValue(category);
  };

  const changePriceFromHandler = (event) => {
    setPriceFrom(event.target.value);
    if (sortASC) {
      setSearchParams({
        price: `${event.target.value}-${priceTo}`,
        sort: "ASC",
      });
    } else if (sortDESC) {
      setSearchParams({
        price: `${event.target.value}-${priceTo}`,
        sort: "DESC",
      });
    } else {
      setSearchParams({
        price: `${event.target.value}-${priceTo}`,
      });
    }
  };

  const changePriceToHandler = (event) => {
    setPriceTo(event.target.value);
    if (sortASC) {
      setSearchParams({
        price: `${priceFrom}-${event.target.value}`,
        sort: "ASC",
      });
    } else if (sortDESC) {
      setSearchParams({
        price: `${priceFrom}-${event.target.value}`,
        sort: "DESC",
      });
    } else {
      setSearchParams({
        price: `${priceFrom}-${event.target.value}`,
      });
    }
  };

  let icon;
  if (categoryState) {
    icon = faCheck;
  } else {
    icon = faX;
  }

  return (
    <div className={classes.filtr}>
      <div className={classes.wrapper}>
        <div className={classes.filterBox}>
          {!categoryState && (
            <div className={classes.category}>
              <div className={classes.selectedCategory}>
                <p>{params.categoryValue}</p>
              </div>
            </div>
          )}
          {categoryState && (
            <div className={classes.category}>
              <DropDownList
                categories={categories}
                onCategoryChange={changeCategoryHandler}
              />
            </div>
          )}
          <FontAwesomeIcon
            icon={icon}
            className={classes.iconCancel}
            onClick={categoryHandler}
          />
        </div>
        <div className={classes.filterBox}>
          <FontAwesomeIcon
            icon={faSortAmountAsc}
            className={`${classes.icon} ${sortDESC ? classes.active : ""}`}
            onClick={sortHandlerDESC}
          />
          <FontAwesomeIcon
            icon={faSortAmountDesc}
            className={`${classes.icon} ${sortASC ? classes.active : ""}`}
            onClick={sortHandlerASC}
          />
        </div>
      </div>

      <div className={classes.priceFilter}>
        <p>Cena</p>
        <div className={classes.inputBox}>
          <Input
            placeholder="Od"
            icon={null}
            type="number"
            onChange={changePriceFromHandler}
            value={priceFrom}
          />
        </div>
        <div className={classes.inputBox}>
          <Input
            placeholder="Do"
            icon={null}
            type="number"
            onChange={changePriceToHandler}
            value={priceTo}
          />
        </div>
      </div>
    </div>
  );
};

export default Filtr;
