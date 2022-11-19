import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./CartItem.module.css";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { cartActions } from "../store";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  };

  return (
    <li key={props.id} className={classes.cartItem}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.price}>{props.price} zł</p>
      <FontAwesomeIcon
        icon={faMinus}
        className={classes.icon}
        onClick={removeItemHandler}
      />
    </li>
  );
};

export default CartItem;
