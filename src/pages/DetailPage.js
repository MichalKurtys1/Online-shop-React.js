import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation/Navigation";
import SearchBar from "../components/SearchBar";
import classes from "./DetailPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDoubleDown,
  faHeart as faHeartSolid,
  faMessage,
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import ItemSection from "../components/ItemSection";
import useHttp from "../hooks/use-http";
import { getAllItems } from "../lib/api";
import { imageList } from "../Resource/imageMenager";
import { useDispatch } from "react-redux";
import { cartActions } from "../store";
import { useNavigate } from "react-router";

const DetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const [icon, setIcon] = useState(faHeartRegular);
  const addFavoriteHandler = () => {
    if (icon === faHeartSolid) {
      setIcon(faHeartRegular);
    } else {
      setIcon(faHeartSolid);
    }
  };

  const showMoreHandler = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  let descriptionHeight;
  if (isOpen === false) {
    descriptionHeight = "66px";
  } else {
    descriptionHeight = "auto";
  }

  let recomendedList = [];
  let selectedItem;
  let image;
  const { sendRequest, status, data: loadedItems } = useHttp(getAllItems, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "completed") {
    selectedItem = loadedItems.filter(
      (item) => item.id.toString() === params.itemId
    );
    recomendedList = loadedItems.filter(
      (item) =>
        item.category === selectedItem[0].category &&
        item.id !== selectedItem[0].id
    );

    if (recomendedList.length > 4) {
      recomendedList = recomendedList.slice(0, 4);
    }

    image = imageList.find((image) => image.name === selectedItem[0].image);
  }

  const addItemHandler = () => {
    dispatch(cartActions.addItem(selectedItem[0]));
    navigate("/cart");
  };

  return (
    <>
      <Navigation />
      <SearchBar />
      {status === "pending" && <p>Trwa Wczytywanie...</p>}
      {status === "completed" && (
        <div className={classes.container}>
          <div className={classes.detailsBox}>
            <p className={classes.links}>
              <NavLink to="/">home </NavLink>/
              <NavLink to={`/results/category/${selectedItem[0].category}`}>
                {selectedItem[0].category}
              </NavLink>
            </p>
            <h1>{selectedItem[0].name}</h1>
            <img src={image.image} alt={`${selectedItem[0].name}`} />
            <div className={classes.details}>
              <p className={classes.price}>{selectedItem[0].price} zł</p>
              <div className={classes.leftBox}>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className={classes.userIcon}
                />
                <p>Osoba prywatna</p>
                <FontAwesomeIcon
                  icon={icon}
                  className={classes.heartIcon}
                  onClick={addFavoriteHandler}
                />
              </div>
            </div>
            <div className={classes.buttons}>
              <button onClick={addItemHandler}>
                Dodaj do Koszyka
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className={classes.icon}
                />
              </button>
              <button>
                Napisz
                <FontAwesomeIcon icon={faMessage} className={classes.icon} />
              </button>
            </div>
          </div>
          <div className={classes.descriptionBox}>
            <p className={classes.title}>Opis</p>
            <p
              className={classes.description}
              style={{ height: descriptionHeight }}
            >
              {selectedItem[0].description}
            </p>
            {!isOpen && (
              <button onClick={showMoreHandler}>
                Pokaż więcej{" "}
                <FontAwesomeIcon
                  icon={faAngleDoubleDown}
                  className={classes.icon}
                />
              </button>
            )}
          </div>
          <div className={classes.userDetails}>
            <img src={require("../Resource/noImage.png")} alt="" />
            <div className={classes.details}>
              <p className={classes.name}>{selectedItem[0].author.name}</p>
              <div className={classes.dataBox}>
                <p>Numer telefonu:</p>
                <p>
                  <strong>{selectedItem[0].author.number}</strong>
                </p>
              </div>
              <div className={classes.dataBox}>
                <p>Adres Email:</p>
                <p>
                  <strong>{selectedItem[0].author.email}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className={classes.simillarResults}>
            <ItemSection items={recomendedList} title="Podobne Wyniki" />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default DetailPage;
