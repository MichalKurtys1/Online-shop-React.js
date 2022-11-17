import ContactDataRecord from "../components/ContactDataRecord";
import Navigation from "../components/Navigation/Navigation";
import classes from "./ContactDataPage.module.css";

const ContactDataPage = () => {
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <p className={classes.title}>Dane kontaktowe</p>
        <ContactDataRecord title="Adres" />
        <ContactDataRecord title="Kod pocztowy" />
        <ContactDataRecord title="Numer telefonu" />
        <ContactDataRecord title="Adres email" />
      </div>
    </>
  );
};

export default ContactDataPage;
