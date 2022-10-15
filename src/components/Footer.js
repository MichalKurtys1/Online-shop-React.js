import classes from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.box}>
        <p className={classes.title}>Support</p>
        <NavLink to="/FAQ" style={{ textDecoration: "none" }}>
          <p>FAQs</p>
        </NavLink>
        <NavLink to="/return" style={{ textDecoration: "none" }}>
          <p>Zwroty</p>
        </NavLink>
        <NavLink to="/terms" style={{ textDecoration: "none" }}>
          <p>Terms</p>
        </NavLink>
        <NavLink to="/privacy" style={{ textDecoration: "none" }}>
          <p>Prywatność</p>
        </NavLink>
      </div>
      <div className={classes.box}>
        <p className={classes.title}>Sitemap</p>
        <NavLink to="/contact" style={{ textDecoration: "none" }}>
          <p>Kontakt</p>
        </NavLink>
        <NavLink to="/profile" style={{ textDecoration: "none" }}>
          <p>Profil</p>
        </NavLink>
        <NavLink to="/about-us" style={{ textDecoration: "none" }}>
          <p>O nas</p>
        </NavLink>
      </div>
      <p className={classes.copyrights}>
        Copyright{" "}
        <FontAwesomeIcon icon={faCopyright} className={classes.icon} /> H & M
        All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
