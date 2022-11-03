import Navigation from "../components/Navigation/Navigation";
import classes from "./ContactPage.module.css";
import Footer from "../components/Footer";
import Input from "../components/ReUsed/Input";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMessage, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import TextArea from "../components/ReUsed/TextArea";

const ContactPage = () => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [nameInputValue, setNameInputValue] = useState("");
  const [surnameInputValue, setSurnameInputValue] = useState("");
  const [messageInputValue, setMessageInputValue] = useState("");
  const [dataIsCorrect, setDataIsCorrect] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    setDataIsCorrect(true);
  };

  const changeEmailHandler = (event) => {
    setEmailInputValue(event.target.value);
  };
  const changeNameHandler = (event) => {
    setNameInputValue(event.target.value);
  };
  const changeSurnameHandler = (event) => {
    setSurnameInputValue(event.target.value);
  };
  const changeMessageHandler = (event) => {
    setMessageInputValue(event.target.value);
  };

  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.imgBox}>
          <div className={classes.opacity}></div>
          <p>Kontakt</p>
        </div>
        <div className={classes.box}>
          <div className={classes.adresBox}>
            <div className={classes.title}>
              <p>Adres</p>
            </div>
            <div className={classes.text}>
              <p>
                ul. Henryka Sienkiewicza 22/3 Warszawa. Biuro jest otwarte od
                pon-pią w godzinach 10-16{" "}
              </p>
            </div>
          </div>
          <div className={classes.supportBox}>
            <div className={classes.title}>
              <p>Wsparcie</p>
            </div>
            <div className={classes.wrapper}>
              <div className={classes.innerBox}>
                <div className={classes.text}>
                  <p>Dział Markentingu:</p>
                </div>
                <div className={classes.number}>
                  <p>tel. 628 284 490</p>
                  <p>marketing@H&M.pl</p>
                </div>
              </div>

              <div className={classes.innerBox}>
                <div className={classes.text}>
                  <p>Dział kard:</p>
                </div>
                <div className={classes.number}>
                  <p>tel. 692 002 577</p>
                  <p>kadry@H&M.pl</p>
                </div>
              </div>

              <div className={classes.innerBox}>
                <div className={classes.text}>
                  <p>Support:</p>
                </div>
                <div className={classes.number}>
                  <p>tel. 559 688 049</p>
                  <p>support@H&M.pl</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.formBox}>
          <div className={classes.title}>
            <p>Skontaktuj się z nami</p>
          </div>
          <form onSubmit={submitHandler}>
            {!dataIsCorrect && (
              <div className={classes.error}>
                <p className={classes.errorMessage}>
                  Podano zły login lub hasło
                </p>
              </div>
            )}
            <Input
              placeholder="Email"
              icon={faEnvelope}
              type="email"
              onChange={changeEmailHandler}
              value={emailInputValue}
              isCorrect={dataIsCorrect}
            />
            <Input
              placeholder="Imie"
              icon={faUserAlt}
              type="text"
              onChange={changeNameHandler}
              value={nameInputValue}
              isCorrect={dataIsCorrect}
            />
            <Input
              placeholder="Nazwisko"
              icon={faUserAlt}
              type="text"
              onChange={changeSurnameHandler}
              value={surnameInputValue}
              isCorrect={dataIsCorrect}
            />
            <TextArea
              placeholder="Wpisz wiadomość..."
              icon={faMessage}
              type="textarea"
              onChange={changeMessageHandler}
              value={messageInputValue}
              isCorrect={dataIsCorrect}
            />
            <input type="submit" value="Wyślij" onSubmit={submitHandler} />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
