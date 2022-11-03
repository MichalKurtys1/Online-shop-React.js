import Navigation from "../components/Navigation/Navigation";
import classes from "./AboutUsPage.module.css";
import {
  faAngleDoubleDown,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import img1 from "../Resource/team1.jpg";
import img2 from "../Resource/team2.jpg";
import img3 from "../Resource/team3.jpg";
import img4 from "../Resource/team4.jpg";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  let icon;
  if (isOpen === false) {
    icon = faAngleDoubleDown;
  } else {
    icon = faAngleDoubleRight;
  }

  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.imgBox}>
          <div className={classes.opacity}></div>
          <p className={classes.title}>Nasza historia</p>
          <div className={classes.showMore} onClick={openHandler}>
            <p className={classes.showMoreText}>Wszystko o nas</p>
            <FontAwesomeIcon icon={icon} className={classes.showMoreIcon} />
          </div>
        </div>
        {isOpen && (
          <div className={classes.textBox}>
            <p>
              Wszystko zaczeło się od dwóch osób i pomysłu. Firma powstała żeby
              ułatwić ludzią życie i pozwolić im się skupić wyłącznie na celu
              przybycia. Dlatego staramy się ułatwić cały proces tak jak się
              tylko da. Ciągle się rozrastamy, a nasz zespół ciągle się
              powiększa aby zaoferować wam jak najlepszą jakość usług.{" "}
            </p>
          </div>
        )}
        <div className={classes.teamContainer}>
          <div className={classes.title}>
            <p>Nasz zespół</p>
          </div>
          <div className={classes.teamBox}>
            <img src={img1} />
            <div className={classes.text}>
              <p className={classes.name}>Janusz Kowalski</p>
              <p className={classes.specialization}>UI Designer</p>
              <p className={classes.description}>
                Pierwszy z założycieli firmy, odpowiedzialny za szatę graficzną
                i sprawy biznesowe.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.teamContainer}>
          <div className={classes.teamBox}>
            <div className={classes.text}>
              <p className={classes.name}>Bartosz Kowalski</p>
              <p className={classes.specialization}>Backend programmer</p>
              <p className={classes.description}>
                Drugi z założycieli firmy, odpowiedzialny za logikę strony i
                nadzór nad pracownikami.
              </p>
            </div>
            <img src={img2} />
          </div>
        </div>
        <div className={classes.teamContainer}>
          <div className={classes.teamBox}>
            <img src={img3} />
            <div className={classes.text}>
              <p className={classes.name}>Andrzej Nowak</p>
              <p className={classes.specialization}>Marketing</p>
              <p className={classes.description}>
                Zajmuje się on marketnigiem, w tym reklamami, social mediami
                oraz współpracą z firmami.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.teamContainer}>
          <div className={classes.teamBox}>
            <div className={classes.text}>
              <p className={classes.name}>Alicja Duda</p>
              <p className={classes.specialization}>Fullstack programmer</p>
              <p className={classes.description}>
                Zajmuje się ona zarówno wyglądem strony jak i niekrórymi jej
                funkcjonalnościami, współpracując przy tym z Januszem i
                Bartoszem.
              </p>
            </div>
            <img src={img4} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
