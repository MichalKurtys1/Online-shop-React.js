import { useNavigate } from "react-router";
import Navigation from "../components/Navigation/Navigation";
import ProfileDetails from "../components/ProfileDetails";
import classes from "./ProfilPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquareAlt,
  faPowerOff,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("expirationTime");
    navigate("/");
  };

  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <FontAwesomeIcon
          icon={faPowerOff}
          className={classes.logoutBtn}
          onClick={logoutHandler}
        />
        <div className={classes.choiseBox}>
          <NavLink to="/contact-details" style={{ textDecoration: "none" }}>
            <button>
              <FontAwesomeIcon
                icon={faPhoneSquareAlt}
                className={classes.panelIcon}
              />
              <p>Dane kontaktowe</p>
            </button>
          </NavLink>
          <NavLink to="/password-change" style={{ textDecoration: "none" }}>
            <button>
              <FontAwesomeIcon icon={faLock} className={classes.panelIcon} />
              <p>Zmiana Hasła</p>
            </button>
          </NavLink>
          <NavLink to="/email-change" style={{ textDecoration: "none" }}>
            <button>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={classes.panelIcon}
              />
              <p>Zmiana Email</p>
            </button>
          </NavLink>
          <NavLink to="/create-offer" style={{ textDecoration: "none" }}>
            <button className={classes.addBtn}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={classes.panelIcon}
              />
              <p>Stwórz Ogłoszenie</p>
            </button>
          </NavLink>
        </div>
      </div>

      <ProfileDetails />
    </>
  );
};

export default ProfilePage;
