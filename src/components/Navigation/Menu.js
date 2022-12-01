import classes from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faCar,
  faLaptop,
  faTshirt,
  faTractor,
  faCouch,
  faPhone,
  faPeopleGroup,
  faBook,
  faStar,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const categories = [
  { icon: faCar, text: "Motoryzacja" },
  { icon: faLaptop, text: "Elektronika" },
  { icon: faTshirt, text: "Odzież" },
  { icon: faBook, text: "Książki" },
  { icon: faTractor, text: "Rolnictwo" },
  { icon: faCouch, text: "Dom i Ogród" },
  { icon: faCalendarAlt, text: "Niedawno dodane" },
  { icon: faStar, text: "Wyróżnione" },
];

const sitemap = [
  { icon: faPhone, text: "Kontakt" },
  { icon: faPeopleGroup, text: "O nas" },
];

const Menu = (props) => {
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged === true) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLogged]);

  const profilHandler = () => {
    navigate("/create-offer");
  };

  return (
    <>
      <div className={classes.menu}>
        <button onClick={props.onClose} className={classes.btnClose}>
          <FontAwesomeIcon icon={faX} className={classes.icon} />
        </button>
        {!isLoggedIn && (
          <button className={classes.btnLogIn} onClick={props.onLogin}>
            Zaloguj się
          </button>
        )}
        {isLoggedIn && (
          <button
            className={classes.btnLogIn}
            onClick={profilHandler}
            style={{ fontWeight: "bold" }}
          >
            Stwórz Ogłoszenie
          </button>
        )}
        <p className={classes.title}>Kategorie</p>
        <div className={classes.categories}>
          {categories.map((category) => {
            return (
              <NavLink
                to={`/results/category/${category.text}`}
                className={classes.category}
                onClick={props.onClose}
              >
                <FontAwesomeIcon
                  icon={category.icon}
                  className={classes.categoryIcon}
                />
                <p>{category.text}</p>
              </NavLink>
            );
          })}

          <div className={classes.separator}></div>

          {sitemap.map((site) => {
            return (
              <NavLink to={`/${site.text}`} className={classes.category}>
                <FontAwesomeIcon
                  icon={site.icon}
                  className={classes.categoryIcon}
                />
                <p>{site.text}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div onClick={props.onClose} className={classes.backdrop}></div>
    </>
  );
};

export default Menu;
