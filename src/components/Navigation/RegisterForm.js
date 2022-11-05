import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Input from "../ReUsed/Input";
import classes from "./FormStyles.module.css";

const RegisterForm = (props) => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passInputValue, setPassInputValue] = useState("");
  const [passRepeatInputValue, setPassRepeatInputValue] = useState("");

  const [emailIsCorrect, setEmailIsCorrect] = useState(true);
  const [passIsCorrect, setPassIsCorrect] = useState(true);
  const [passRepeatIsCorrect, setPassRepeatIsCorrect] = useState(true);

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  const submitHandler = (event) => {
    event.preventDefault();

    if (!validEmail.test(emailInputValue)) {
      setEmailIsCorrect(false);
      return;
    } else {
      setEmailIsCorrect(true);
    }

    if (!validPassword.test(passInputValue)) {
      setPassIsCorrect(false);
      return;
    } else {
      setPassIsCorrect(true);
    }

    if (passInputValue !== passRepeatInputValue) {
      setPassRepeatIsCorrect(false);
      return;
    } else {
      setPassRepeatIsCorrect(true);
    }

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxRGxcoq7cdVg8o3h9pAAlAoaELKy3nJ8",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailInputValue,
          password: passInputValue,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        props.onClose();
      } else {
        return res.json().then((data) => {
          setPassIsCorrect(false);
          console.log(data);
        });
      }
    });

    setEmailInputValue("");
    setPassInputValue("");
    setPassRepeatInputValue("");
  };

  const changeEmailHandler = (event) => {
    setEmailInputValue(event.target.value);
  };

  const changePassHandler = (event) => {
    setPassInputValue(event.target.value);
  };

  const changePassRepeatHandler = (event) => {
    setPassRepeatInputValue(event.target.value);
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
        <p>Rejestracja</p>
        {!emailIsCorrect && (
          <div className={classes.error}>
            <p className={classes.errorMessage}>Proszę podać adres E-mail</p>
          </div>
        )}
        {!passIsCorrect && (
          <div className={classes.error}>
            <p className={classes.errorMessage}>
              Proszę podać poprawne hasło. Powinno ono zawierać przynajmniej
              jedną wielką literę i cyfrę oraz mieć przynajmniej 6 znaków.
            </p>
          </div>
        )}
        {!passRepeatIsCorrect && (
          <div className={classes.error}>
            <p className={classes.errorMessage}>
              Hasło zostało powtórzone błędnie
            </p>
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
        <Input
          placeholder="Hasło"
          icon={faLock}
          type="password"
          onChange={changePassHandler}
          value={passInputValue}
          isCorrect={passIsCorrect}
        />
        <Input
          placeholder="Powtórz Hasło"
          icon={faLock}
          type="password"
          onChange={changePassRepeatHandler}
          value={passRepeatInputValue}
          isCorrect={passRepeatIsCorrect}
        />
        <input type="submit" value="Zarejestruj" />
      </form>
      <div className={classes.signIn}>
        <span>Masz już konto?</span>
        <button onClick={props.onOpenLogin}>Zaloguj się</button>
      </div>
    </div>
  );
};

export default RegisterForm;
