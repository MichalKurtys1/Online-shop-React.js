import classes from "./Item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Item = (props) => {
  const [icon, setIcon] = useState(faHeartRegular);
  const addFavoriteHandler = () => {
    if (icon === faHeartSolid) {
      setIcon(faHeartRegular);
    } else {
      setIcon(faHeartSolid);
    }
  };

  return (
    <NavLink
      to={`/details/${props.id}`}
      style={{ color: "black", textDecoration: "none" }}
    >
      <div className={classes.container}>
        <img src={props.image} alt="" />
        <p className={classes.name}>{props.name}</p>
        <div className={classes.box}>
          <p className={classes.price}>{`${props.price} zł`}</p>
          <NavLink style={{ color: "black", textDecoration: "none" }}>
            <FontAwesomeIcon
              icon={icon}
              className={classes.icon}
              onClick={addFavoriteHandler}
            />
          </NavLink>
        </div>
      </div>
    </NavLink>
  );
};

export default Item;
