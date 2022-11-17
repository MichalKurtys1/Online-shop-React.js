import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../ReUsed/Input";
import classes from "./FormStyles.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const [loginInputValue, setLoginInputValue] = useState("");
  const [passInputValue, setPassInputValue] = useState("");
  const [dataIsCorrect, setDataIsCorrect] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxRGxcoq7cdVg8o3h9pAAlAoaELKy3nJ8",
      {
        method: "POST",
        body: JSON.stringify({
          email: loginInputValue,
          password: passInputValue,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            setDataIsCorrect(false);
            console.log(data);
            throw new Error("Authentication Failed!");
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        dispatch(authActions.logIn(data.idToken));
        autoLogoutHandler(expirationTime);
        props.onClose();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const autoLogoutCalculator = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
  };

  const autoLogoutHandler = (expirationTime) => {
    const remainingDuration = autoLogoutCalculator(expirationTime);
    setTimeout(() => {
      dispatch(authActions.logOut());
    }, remainingDuration);
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
