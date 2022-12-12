import ad from "../Resource/Ad.jpg";
import classes from "./Ad.module.css";
import { NavLink } from "react-router-dom";

const Ad = () => {
  return (
    <NavLink to={"/results/category/Książki"}>
      <img src={ad} alt="reklama" className={classes.img} />
    </NavLink>
  );
};

export default Ad;
