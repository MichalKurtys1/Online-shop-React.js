import classes from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.box}>
        <p className={classes.title}>Support</p>
        <NavLink to="/TermsOfUse" style={{ textDecoration: "none" }}>
          <p>Warunki Korzystania</p>
        </NavLink>
        <NavLink to="/PrivacyPolicy" style={{ textDecoration: "none" }}>
          <p>Polityka Prywatność</p>
        </NavLink>
        <NavLink to="/FAQ" style={{ textDecoration: "none" }}>
          <p>FAQs</p>
        </NavLink>
      </div>
      <div className={classes.box}>
        <p className={classes.title}>Sitemap</p>
        <NavLink to="/Kontakt" style={{ textDecoration: "none" }}>
          <p>Kontakt</p>
        </NavLink>
        <NavLink to="/O nas" style={{ textDecoration: "none" }}>
          <p>O nas</p>
        </NavLink>
      </div>
      <p className={classes.copyrights}>
        <FontAwesomeIcon icon={faCopyright} className={classes.icon} /> H & M
        All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
