import Item from "./Item";
import { NavLink } from "react-router-dom";
import classes from "./ItemSection.module.css";

const ItemSection = (props) => {
  return (
    <div className={classes.wrap}>
      <div className={classes.text}>
        <p>{props.title}</p>
        <NavLink
          to={`/results/category/${props.title}`}
          className={classes.showMore}
          style={{ textDecoration: "none" }}
        >
          <p>{props.buttonTxt}</p>
        </NavLink>
      </div>

      <div className={classes.conteiner}>
        {props.items.map((item) => {
          return (
            <Item
              key={item.name}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemSection;
