import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Input from "../components/ReUsed/Input";
import classes from "./ChangePasswordPage.module.css";

const ChangePasswordPage = () => {
  const [error, setError] = useState(false);
  const [newPasswordIsCorrect, setNewPasswordIsCorrect] = useState(true);
  const [oldPasswordIsCorrect, setOldPasswordIsCorrect] = useState(true);
  const [newPasswordInputValue, setNewPasswordInputValue] = useState("");
  const [oldPasswordInputValue, setOldPasswordInputValue] = useState("");
  const [oldPasswordRepeatInputValue, setOldPasswordRepeatInputValue] =
    useState("");

  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  const changeNewPasswordHandler = (event) => {
    setNewPasswordInputValue(event.target.value);
  };

  const changeOldPasswordHandler = (event) => {
    setOldPasswordInputValue(event.target.value);
  };

  const changeOldPasswordRepeatHandler = (event) => {
    setOldPasswordRepeatInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!validPassword.test(newPasswordInputValue)) {
      setNewPasswordIsCorrect(false);
      return;
    }

    if (oldPasswordInputValue !== oldPasswordRepeatInputValue) {
      setOldPasswordIsCorrect(false);
      return;
    }

    setNewPasswordIsCorrect(true);
    setOldPasswordIsCorrect(true);

    setNewPasswordInputValue("");
    setOldPasswordInputValue("");
    setOldPasswordRepeatInputValue("");

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAxRGxcoq7cdVg8o3h9pAAlAoaELKy3nJ8",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: localStorage.getItem("token"),
          password: newPasswordInputValue,
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
            console.log(data);
            setError(true);
            throw new Error("Authentication Failed!");
          });
        }
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.idToken);
        localStorage.setItem("isLoggedIn", true);
      })
      .catch((err) => {
        setError(true);
        console.log(err.message);
      });
  };

  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <p>Zmiana hasła</p>
        {error && (
          <div className={classes.error}>
            <p className={classes.errorMessage}>
              Wystąpił nieoczekiwany Error proszę spróbować ponownie za kilka
              minut
            </p>
          </div>
        )}
        {!newPasswordIsCorrect && (
          <div className={classes.error}>
            <p className={classes.errorMessage}>
              Proszę podać poprawne hasło. Powinno ono zawierać przynajmniej
              jedną wielką literę i cyfrę oraz mieć przynajmniej 6 znaków.
            </p>
          </div>
        )}
        {!oldPasswordIsCorrect && (
          <div className={classes.error}>
            <p className={classes.errorMessage}>
              Zostało podane niewłaściwe hasło lub zostało ono błędnie
              powtórzone
            </p>
          </div>
        )}
        <form onSubmit={submitHandler}>
          <Input
            placeholder="Nowe hasło"
            icon={faLockOpen}
            type="text"
            onChange={changeNewPasswordHandler}
            value={newPasswordInputValue}
            isCorrect={newPasswordIsCorrect}
          />
          <Input
            placeholder="Stare hasło"
            icon={faLock}
            type="text"
            onChange={changeOldPasswordHandler}
            value={oldPasswordInputValue}
            isCorrect={oldPasswordIsCorrect}
          />
          <Input
            placeholder="Powtórz stare hasło"
            icon={faLock}
            type="text"
            onChange={changeOldPasswordRepeatHandler}
            value={oldPasswordRepeatInputValue}
            isCorrect={oldPasswordIsCorrect}
          />
          <input type="submit" value="Zmień hasło" />
        </form>
      </div>
    </>
  );
};

export default ChangePasswordPage;
