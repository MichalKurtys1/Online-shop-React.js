import {
  faDollar,
  faDownload,
  faFileAlt,
  faPenFancy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Input from "../components/ReUsed/Input";
import TextArea from "../components/ReUsed/TextArea";
import classes from "./CreateOfferPage.module.css";
import DropDownList from "../components/ReUsed/DropDownList";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router";

const categories = [
  { name: "Motoryzacja" },
  { name: "Elektronika" },
  { name: "Odzież" },
  { name: "Książki" },
  { name: "Rolnictwo" },
  { name: "Dom i Ogród" },
  { name: "Niedawno dodane" },
  { name: "Wyróżnione" },
];

const CreateOfferPage = () => {
  const navigete = useNavigate();

  const [isFilePicked, setIsFilePicked] = useState(true);
  const [nameIsCorrect, setNameIsCorrect] = useState(true);
  const [priceIsCorrect, setPriceIsCorrect] = useState(true);
  const [categoryIsCorrect, setCategoryIsCorrect] = useState(true);
  const [descriptionIsCorrect, setDescriptionIsCorrect] = useState(true);

  const [selectedFile, setSelectedFile] = useState("");
  const [nameInputValue, setNameInputValue] = useState("");
  const [priceInputValue, setPriceInputValue] = useState("");
  const [categoryInputValue, setCategoryInputValue] = useState("");
  const [descriptionInputValue, setDescriptionInputValue] = useState("");

  const changeFileHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const changeNameHandler = (event) => {
    setNameInputValue(event.target.value);
  };

  const changePriceHandler = (event) => {
    setPriceInputValue(event.target.value);
  };

  const changeCategoryHandler = (category) => {
    setCategoryInputValue(category);
  };

  const changeDescriptionHandler = (event) => {
    setDescriptionInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (categoryInputValue.length === 0) {
      setCategoryIsCorrect(false);
      return;
    }
    setCategoryIsCorrect(true);

    if (nameInputValue.length < 6) {
      setNameIsCorrect(false);
      return;
    }
    setNameIsCorrect(true);

    if (isNaN(priceInputValue) || priceInputValue.length === 0) {
      setPriceIsCorrect(false);
      return;
    }
    setPriceIsCorrect(true);

    if (descriptionInputValue.length < 10) {
      setDescriptionIsCorrect(false);
      return;
    }
    setDescriptionIsCorrect(true);

    if (selectedFile === "") {
      setIsFilePicked(false);
      return;
    }
    setIsFilePicked(true);
    setDescriptionIsCorrect(true);

    navigete("/Profil");
  };

  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <p>Stwórz ofertę</p>
        <form onSubmit={submitHandler}>
          {!nameIsCorrect && (
            <div className={classes.error}>
              <p className={classes.errorMessage}>
                Brak nazwy przedmiotu lub jest ona za krótka.
              </p>
            </div>
          )}
          {!priceIsCorrect && (
            <div className={classes.error}>
              <p className={classes.errorMessage}>
                Brak ceny lub nie jest ona liczbą.
              </p>
            </div>
          )}
          {!categoryIsCorrect && (
            <div className={classes.error}>
              <p className={classes.errorMessage}>Brak wybranej kategori.</p>
            </div>
          )}
          {!descriptionIsCorrect && (
            <div className={classes.error}>
              <p className={classes.errorMessage}>
                Brak opisu produktu lub jest on za krótki.
              </p>
            </div>
          )}
          {!isFilePicked && (
            <div className={classes.error}>
              <p className={classes.errorMessage}>Nie wybrano zdjęcia.</p>
            </div>
          )}
          <DropDownList
            categories={categories}
            onCategoryChange={changeCategoryHandler}
          />
          <Input
            placeholder="Nazwa"
            icon={faPenFancy}
            type="text"
            onChange={changeNameHandler}
            value={nameInputValue}
            isCorrect={nameIsCorrect}
          />
          <Input
            placeholder="Cena"
            icon={faDollar}
            type="text"
            onChange={changePriceHandler}
            value={priceInputValue}
            isCorrect={priceIsCorrect}
          />

          <TextArea
            placeholder="Napisz opis przedmiotu..."
            icon={faFileAlt}
            type="textarea"
            onChange={changeDescriptionHandler}
            value={descriptionInputValue}
            isCorrect={descriptionIsCorrect}
          />

          <div className={classes.fileUpload}>
            <label htmlFor="file-upload" className={classes.customFileUpload}>
              <FontAwesomeIcon icon={faDownload} className={classes.icons} />
              Wczytaj zdjęcie
            </label>
            <input id="file-upload" type="file" onChange={changeFileHandler} />
          </div>

          <input type="submit" value="Stwórz ofertę" />
        </form>
      </div>
    </>
  );
};

export default CreateOfferPage;
