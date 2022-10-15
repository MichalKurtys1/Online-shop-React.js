import classes from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router";
const SearchBar = (props) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`/results/search/${inputValue}`);
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
          <button type="button">
            <FontAwesomeIcon icon={faSlidersH} className={classes.icon} />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
