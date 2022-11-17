import classes from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router";
import Filtr from "../components/Filtr";

const SearchBar = (props) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [filterIsOpen, setFilerIsOpen] = useState(false);

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`/results/search/${inputValue}`);
  };

  const filterHandler = () => {
    if (filterIsOpen) {
      setFilerIsOpen(false);
    } else {
      setFilerIsOpen(true);
    }
  };

  return (
    <div>
      <form className={classes.search} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Szukaj"
          onChange={changeHandler}
          value={inputValue}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} className={classes.icon} />
        </button>
        {props.filter && (
          <button type="button" onClick={filterHandler}>
            <FontAwesomeIcon icon={faSlidersH} className={classes.icon} />
          </button>
        )}
      </form>
      {filterIsOpen && <Filtr />}
    </div>
  );
};

export default SearchBar;
