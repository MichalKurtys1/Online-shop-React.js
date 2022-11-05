import { useNavigate } from "react-router";
import Navigation from "../components/Navigation/Navigation";

const ProfilePage = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isLoggedIn", false);
    navigate("/");
  };

  return (
    <>
      <Navigation />
      <div>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </>
  );
};

export default ProfilePage;
