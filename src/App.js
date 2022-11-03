import "./App.css";
import MainPage from "./pages/MainPage";
import ResultsPage from "./pages/ResultsPage";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import TermsOfUse from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import FAQPage from "./pages/FAQPage";
import AboutUsPage from "./pages/AboutUsPage";
function App() {
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
