import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Navigation from "../components/Navigation/Navigation";
import Input from "../components/ReUsed/Input";
import { authActions } from "../store";
import classes from "./ChangePasswordPage.module.css";

const ChangeEmailPage = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [passwordIsCorrect, setPasswordIsCorrect] = useState(true);
  const [emailIsCorrect, setEmailIsCorrect] = useState(true);
  const [newEmailInputValue, setNewEmailInputValue] = useState("");
  const [oldPasswordInputValue, setOldPasswordInputValue] = useState("");
  const [oldPasswordRepeatInputValue, setOldPasswordRepeatInputValue] =
    useState("");

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const changeNewEmailHandler = (event) => {
    setNewEmailInputValue(event.target.value);
  };

  const changeOldPasswordHandler = (event) => {
    setOldPasswordInputValue(event.target.value);
  };

  const changeOldPasswordRepeatHandler = (event) => {
    setOldPasswordRepeatInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!validEmail.test(newEmailInputValue)) {
      setEmailIsCorrect(false);
      return;
    }

    if (oldPasswordInputValue !== oldPasswordRepeatInputValue) {
      setPasswordIsCorrect(false);
      return;
    }

    setEmailIsCorrect(true);
    setPasswordIsCorrect(true);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAxRGxcoq7cdVg8o3h9pAAlAoaELKy3nJ8",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          email: newEmailInputValue,
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
        dispatch(authActions.logIn(data.idToken));
        navigate("/Profil");
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
        <p>Zmiana email</p>
        {error && (
          <div className={classes.error}>
            <p className={classes.errorMessage}>
              Wystąpił nieoczekiwany Error proszę spróbować ponownie za kilka
              minut
            </p>
          </div>
        )}
        {!emailIsCorrect && (
          <div className={classes.error}>
            <p className={classes.errorMessage}>
              Proszę podać adres poprawny E-mail
            </p>
          </div>
        )}
        {!passwordIsCorrect && (
          <div className={classes.error}>
            <p className={classes.errorMessage}>
              Zostało podane niewłaściwe hasło lub zostało ono błędnie
              powtórzone
            </p>
          </div>
        )}
        <form onSubmit={submitHandler}>
          <Input
            placeholder="Nowy email"
            icon={faEnvelope}
            type="text"
            onChange={changeNewEmailHandler}
            value={newEmailInputValue}
            isCorrect={emailIsCorrect}
          />
          <Input
            placeholder="Hasło"
            icon={faLock}
            type="text"
            onChange={changeOldPasswordHandler}
            value={oldPasswordInputValue}
            isCorrect={passwordIsCorrect}
          />
          <Input
            placeholder="Powtórz hasło"
            icon={faLock}
            type="text"
            onChange={changeOldPasswordRepeatHandler}
            value={oldPasswordRepeatInputValue}
            isCorrect={passwordIsCorrect}
          />
          <input type="submit" value="Zmień email" />
        </form>
      </div>
    </>
  );
};

export default ChangeEmailPage;
