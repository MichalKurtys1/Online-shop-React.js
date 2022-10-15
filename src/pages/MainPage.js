import React from "react";
import Ad from "../components/Ad";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import SliderCategorie from "../components/SliderCategorie";
import SliderPartners from "../components/SliderPartners";
import ItemSection from "../components/ItemSection";
import Footer from "../components/Footer";
import itemList from "../store/list";

import slider1 from "../Resource/categoria1.jpg";
import slider2 from "../Resource/categoria2.jpeg";
import slider3 from "../Resource/categoria3.jpg";
import slider4 from "../Resource/categoria4.jpg";
import slider5 from "../Resource/categoria5.jpeg";
import slider6 from "../Resource/categoria6.jpeg";

import partners1 from "../Resource/partners1.jpg";
import partners2 from "../Resource/partners2.jpg";
import partners3 from "../Resource/partners3.png";
import partners4 from "../Resource/partners4.png";

const categoriesList = [
  { image: slider1, title: "Motoryzacja" },
  { image: slider3, title: "Elektronika" },
  { image: slider2, title: "Odzież" },
  { image: slider4, title: "Książki" },
  { image: slider5, title: "Rolnictwo" },
  { image: slider6, title: "Dom i Ogród" },
];

const partnersList = [
  { image: partners1 },
  { image: partners2 },
  { image: partners3 },
  { image: partners4 },
];

const MainPage = () => {
  const sortedListByDate = itemList.sort(
    (item1, item2) => item2.date - item1.date
  );
  const recentlyAddedList = sortedListByDate.slice(0, 4);

  const favoriteCategory = "Rolnictwo";
  const recomendedList = itemList.filter(
    (item) => item.category === favoriteCategory
  );

  return (
    <React.Fragment>
      <Navigation />
      <SearchBar />
      <Ad />
      <SliderCategorie items={categoriesList} title="Kategorie" />
      <ItemSection
        items={recentlyAddedList}
        title="Niedawno dodane"
        buttonTxt="Pokaż więcej"
      />
      <SliderPartners items={partnersList} title="Patnerzy" />
      <ItemSection
        items={recomendedList}
        title="Wyróżnione"
        buttonTxt="Pokaż więcej"
      />
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
