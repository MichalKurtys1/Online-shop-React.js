import React, { useState } from "react";
import classes from "./Navigation.module.css";
import logo from "../../Resource/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgetPassword from "./ForgetPassword";

const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);
  const [forgetPassIsOpen, setForgetPassIsOpen] = useState(false);

  const showMenu = () => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
      return;
    }
    setMenuIsOpen(true);
  };

  const showLogin = () => {
    if (forgetPassIsOpen) {
      setForgetPassIsOpen(false);
    }
    if (registerIsOpen) {
      setRegisterIsOpen(false);
    }
    if (menuIsOpen) {
      setMenuIsOpen(false);
    }
    if (loginIsOpen) {
      setLoginIsOpen(false);
      return;
    }
    setLoginIsOpen(true);
  };

  const showRegister = () => {
    if (loginIsOpen) {
      setLoginIsOpen(false);
    }
    if (registerIsOpen) {
      setRegisterIsOpen(false);
      return;
    }
    setRegisterIsOpen(true);
  };

  const showForgetPass = () => {
    if (loginIsOpen) {
      setLoginIsOpen(false);
    }
    if (forgetPassIsOpen) {
      setForgetPassIsOpen(false);
      return;
    }
    setForgetPassIsOpen(true);
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
        <button onClick={showLogin} className={classes.btn}>
          <FontAwesomeIcon icon={faUser} className={classes.icons} />
        </button>
        <FontAwesomeIcon icon={faShoppingCart} className={classes.icons} />
      </div>

      {menuIsOpen && <Menu onClose={showMenu} onLogin={showLogin} />}
      {loginIsOpen && (
        <LoginForm
          onClose={showLogin}
          onOpenRegister={showRegister}
          onOpenForgetPass={showForgetPass}
        />
      )}
      {registerIsOpen && (
        <RegisterForm onClose={showRegister} onOpenLogin={showLogin} />
      )}
      {forgetPassIsOpen && (
        <ForgetPassword onClose={showForgetPass} onOpenLogin={showLogin} />
      )}
    </div>
  );
};

export default Navigation;
