import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer";
import classes from "./CartPage.module.css";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
  const list = useSelector((state) => state.cart.list);

  let itemCost = 0;
  list.map((item) => (itemCost += item.price));

  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <p className={classes.title}>Koszyk</p>
        <ul className={classes.cart}>
          {list.length > 0 &&
            list.map((item) => (
              <CartItem id={item.id} name={item.name} price={item.price} />
            ))}
          {list.length === 0 && <p>Narazie koszyk jest pusty</p>}
        </ul>
        <p className={classes.sum}>Łącznie do zapłacenia: {itemCost}</p>
        <button className={classes.submitBtn}>
          Przejdź do płatności
          <FontAwesomeIcon icon={faMoneyBills} className={classes.icon} />
        </button>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
