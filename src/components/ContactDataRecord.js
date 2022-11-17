import { faCheck, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import classes from "./ContactDataRecord.module.css";

const ContactDataRecord = (props) => {
  const [modifyMode, setModifyMode] = useState(false);
  const [modifyValue, setModifyValue] = useState("Nie ustawiony");

  const modifyHandler = () => {
    if (modifyMode) {
      setModifyMode(false);
    } else {
      setModifyMode(true);
    }
  };

  const changeHandler = (event) => {
    setModifyValue(event.target.value);
  };

  let icon;
  if (!modifyMode) {
    icon = faPenFancy;
  } else {
    icon = faCheck;
  }

  return (
    <div className={classes.DataRecordBox}>
      <p>{props.title}:</p>
      {!modifyMode && <p className={classes.data}>{modifyValue}</p>}
      {modifyMode && (
        <input
          type="text"
          className={classes.dataInput}
          onChange={changeHandler}
          value={modifyValue}
        />
      )}
      <button onClick={modifyHandler}>
        <FontAwesomeIcon icon={icon} className={classes.icon} />
      </button>
    </div>
  );
};

export default ContactDataRecord;
