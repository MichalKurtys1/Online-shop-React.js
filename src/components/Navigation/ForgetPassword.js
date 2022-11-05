import { faEnvelope, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Input from "../ReUsed/Input";
import classes from "./FormStyles.module.css";

const ForgetPassword = (props) => {
  const [emailIsCorrect, setEmailIsCorrect] = useState(true);
  const [emailInputValue, setEmailInputValue] = useState("");

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const submitHandler = (event) => {
    event.preventDefault();

    if (!validEmail.test(emailInputValue)) {
      setEmailIsCorrect(false);
      return;
    }
    setEmailIsCorrect(true);
    setEmailInputValue("");
  };

  const changeEmailHandler = (event) => {
    setEmailInputValue(event.target.value);
  };

  return (
    <div className={classes.container}>
      <button className={classes.btn} onClick={props.onClose}>
        <FontAwesomeIcon icon={faX} className={classes.icons} />
      </button>
      <section>
        <div className={classes.skewed}></div>
      </section>
      <form onSubmit={submitHandler}>
        <p>Resetowanie hasła</p>
        <span className={classes.message}>
          Na twój Email zostanie wysłana wiadomość z nowym hasłem, które możesz
          zmienić podczas następnego logowania.
        </span>
        {!emailIsCorrect && (
          <div className={classes.error}>
            <p className={classes.errorMessage}>Proszę podać adres E-mail</p>
          </div>
        )}
        <Input
          placeholder="Email"
          icon={faEnvelope}
          type="text"
          onChange={changeEmailHandler}
          value={emailInputValue}
          isCorrect={emailIsCorrect}
        />
        <input type="submit" value="Resetuj hasło" />
      </form>
      <div className={classes.signIn}>
        <button onClick={props.onOpenLogin}>Zaloguj się</button>
      </div>
    </div>
  );
};

export default ForgetPassword;
