import Item from "./Item";
import { NavLink } from "react-router-dom";
import classes from "./ItemSection.module.css";
import { imageList } from "../Resource/imageMenager";

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
          const image = imageList.find((image) => image.name === item.image);
          return (
            <Item
              key={item.name}
              image={image.image}
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
