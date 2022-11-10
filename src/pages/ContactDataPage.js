import Navigation from "../components/Navigation/Navigation";
import classes from "./ContactDataPage.module.css";

const ContactDataPage = () => {
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <p className={classes.title}>Dane kontaktowe</p>
        <div className={classes.box}>
          <p>Adres:</p>
          <p className={classes.data}>ul.Radziejowska 5 Zakrzewo</p>
        </div>
        <div className={classes.box}>
          <p>Kod Pocztowy:</p>
          <p className={classes.data}>87-707 Zakrzewo</p>
        </div>
        <div className={classes.box}>
          <p>Telefon:</p>
          <p className={classes.data}>692 722 810</p>
        </div>
        <div className={classes.box}>
          <p>Adres Email:</p>
          <p className={classes.data}>janusz.kobra@wp.pl</p>
        </div>
      </div>
    </>
  );
};

export default ContactDataPage;
