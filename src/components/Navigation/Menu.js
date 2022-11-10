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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const profilHandler = () => {
    navigate("/Profil");
  };

  return (
    <div className={classes.container}>
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
        <div className={classes.categories}>
          <p className={classes.title}>Kategorie</p>

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
    </div>
  );
};

export default Menu;
