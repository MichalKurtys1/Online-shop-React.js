import classes from "./SliderCategorie.module.css";
import { NavLink } from "react-router-dom";

const SliderCaregorie = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <p>{props.title}</p>
        <NavLink
          to="/"
          className={classes.showMore}
          style={{ textDecoration: "none" }}
        >
          <p>{props.buttonTxt}</p>
        </NavLink>
      </div>
      <div className={classes.slider}>
        {props.items.map((category) => (
          <NavLink
            to={`/results/category/${category.title}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className={classes.card}>
              <img src={category.image} alt={category.image} />
              <p>{category.title ? category.title : ""}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SliderCaregorie;
