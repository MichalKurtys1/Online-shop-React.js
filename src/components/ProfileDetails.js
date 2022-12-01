import { useState } from "react";
import classes from "./ProfileDetails.module.css";

const ProfileDetails = () => {
  const [activeOffersIsOpen, setActiveOffersIsOpen] = useState(true);
  const [deliveriesIsOpen, setDeliveriesIsOpen] = useState(false);
  const [endedTransactionsIsOpen, setEndedTransactionsIsOpen] = useState(false);

  const activeOffersHandler = () => {
    setActiveOffersIsOpen(true);
    setDeliveriesIsOpen(false);
    setEndedTransactionsIsOpen(false);
  };

  const deliveriesHandler = () => {
    setActiveOffersIsOpen(false);
    setDeliveriesIsOpen(true);
    setEndedTransactionsIsOpen(false);
  };

  const endedTransactionsHandler = () => {
    setActiveOffersIsOpen(false);
    setDeliveriesIsOpen(false);
    setEndedTransactionsIsOpen(true);
  };

  return (
    <>
      <div className={classes.stateTypes}>
        <button onClick={deliveriesHandler}>Twoje przesyłki</button>
        <button onClick={activeOffersHandler}>Aktywne ogłoszenia</button>
        <button onClick={endedTransactionsHandler}>Zakończone</button>
      </div>
      <div className={classes.stateResults}>
        {activeOffersIsOpen && <p>Brak aktywnych ogłoszeń</p>}
        {deliveriesIsOpen && <p>Brak przesyłek</p>}
        {endedTransactionsIsOpen && <p>Brak zakończonych transakcji</p>}
      </div>
    </>
  );
};

export default ProfileDetails;
