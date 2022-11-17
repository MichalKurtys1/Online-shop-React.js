export const init = () => {
  let expirationTime = localStorage.getItem("expirationTime");

  if (expirationTime !== null) {
    const intervalId = setInterval(function () {
      localStorage.setItem(
        "expirationTime",
        localStorage.getItem("expirationTime") - 1
      );
      if (localStorage.getItem("expirationTime") <= 0) {
        clearInterval(intervalId);
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("expirationTime");
      }
    }, 60000);
  }
};
