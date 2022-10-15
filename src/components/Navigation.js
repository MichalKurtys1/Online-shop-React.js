import React, { useState } from "react";
import classes from "./Navigation.module.css";
import logo from "../Resource/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const showMenu = () => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
      return;
    }
    setMenuIsOpen(true);
  };

  return (
    <div className={classes.nav}>
      <div className={classes.nav__box}>
        <button onClick={showMenu} className={classes.btn}>
          <FontAwesomeIcon icon={faBars} className={classes.icons} />
        </button>
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/profile">
          <FontAwesomeIcon icon={faUser} className={classes.icons} />
        </NavLink>
        <FontAwesomeIcon icon={faShoppingCart} className={classes.icons} />
      </div>
      {menuIsOpen && <Menu onClose={showMenu} />}
    </div>
  );
};

export default Navigation;
