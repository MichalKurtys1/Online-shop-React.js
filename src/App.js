import "./App.css";
import MainPage from "./pages/MainPage";
import ResultsPage from "./pages/ResultsPage";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import TermsOfUse from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import FAQPage from "./pages/FAQPage";
import AboutUsPage from "./pages/AboutUsPage";
import DetailPage from "./pages/DetailPage";
import ProfilePage from "./pages/ProfilePage";
import { useEffect } from "react";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import ChangeEmailPage from "./pages/ChangeEmailPage";
import ContactDataPage from "./pages/ContactDataPage";
import CreateOfferPage from "./pages/CreateOfferPage";
function App() {
  useEffect(() => {
    if (localStorage.length === 0) {
      localStorage.setItem("isLoggedIn", false);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route
          path="/results/search/:searchValue"
          element={<ResultsPage />}
        ></Route>
        <Route
          path="/results/category/:categoryValue"
          element={<ResultsPage />}
        ></Route>
        <Route path="/details/:itemId" element={<DetailPage />}></Route>
        <Route path="/password-change" element={<ChangePasswordPage />}></Route>
        <Route path="/email-change" element={<ChangeEmailPage />}></Route>
        <Route path="/contact-details" element={<ContactDataPage />}></Route>
        <Route path="/create-offer" element={<CreateOfferPage />}></Route>
        <Route path="/Profil" element={<ProfilePage />}></Route>
        <Route path="/Kontakt" element={<ContactPage />}></Route>
        <Route path="/TermsOfUse" element={<TermsOfUse />}></Route>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />}></Route>
        <Route path="/FAQ" element={<FAQPage />}></Route>
        <Route path="/O nas" element={<AboutUsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
