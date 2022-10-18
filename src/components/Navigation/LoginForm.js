import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../ReUsed/Input";
import classes from "./FormStyles.module.css";
import usersList from "../../store/usersList";
import { useState } from "react";

const LoginForm = (props) => {
  const [loginInputValue, setLoginInputValue] = useState("");
  const [passInputValue, setPassInputValue] = useState("");
  const [dataIsCorrect, setDataIsCorrect] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const results = usersList.filter(
      (user) =>
        user.login === loginInputValue && user.password === passInputValue
    );

    if (results.length > 0) {
      setDataIsCorrect(true);
      setLoginInputValue("");
      setPassInputValue("");

      // set in local storage
    } else {
      setDataIsCorrect(false);
    }
  };

  const changeLoginHandler = (event) => {
    setLoginInputValue(event.target.value);
  };
  const changePasswordHandler = (event) => {
    setPassInputValue(event.target.value);
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
        <p>Logowanie</p>
        {!dataIsCorrect && (
          <div className={classes.error}>
            <p className={classes.errorMessage}>Podano zły login lub hasło</p>
          </div>
        )}
        <Input
          placeholder="Login"
          icon={faUser}
          type="text"
          onChange={changeLoginHandler}
          value={loginInputValue}
          isCorrect={dataIsCorrect}
        />
        <Input
          placeholder="Hasło"
          icon={faLock}
          type="password"
          onChange={changePasswordHandler}
          value={passInputValue}
          isCorrect={dataIsCorrect}
        />
        <span onClick={props.onOpenForgetPass}>Zapomniałeś hasła?</span>
        <input type="submit" value="Zaloguj" />
      </form>
      <div className={classes.signIn}>
        <span>Nie masz jeszcze konta?</span>
        <button onClick={props.onOpenRegister}>Stwórz</button>
      </div>
    </div>
  );
};

export default LoginForm;
