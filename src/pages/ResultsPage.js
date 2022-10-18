import Footer from "../components/Footer";
import Navigation from "../components/Navigation/Navigation";
import Results from "../components/Results";
import SearchBar from "../components/SearchBar";
const ResultsPage = () => {
  return (
    <>
      <Navigation />
      <SearchBar filter={true} />
      <Results />
      <Footer />
    </>
  );
};

export default ResultsPage;
