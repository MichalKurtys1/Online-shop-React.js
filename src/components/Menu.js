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
  faUser,
  faBook,
  faStar,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

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
  { icon: faUser, text: "Profil" },
];

const Menu = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <button onClick={props.onClose} className={classes.btnClose}>
          <FontAwesomeIcon icon={faX} className={classes.icon} />
        </button>
        <NavLink to="/">
          <button className={classes.btnLogIn}>Zaloguj się</button>
        </NavLink>
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
