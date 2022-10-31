import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faAngleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Question.module.css";
import { useState } from "react";

const Question = (props) => {
  const [isShown, setIsShown] = useState(false);

  const clickHandler = () => {
    if (isShown === false) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  };

  return (
    <div className={classes.questionBox}>
      <div className={classes.question}>
        <FontAwesomeIcon
          icon={faPlus}
          className={classes.plusIcon}
          onClick={clickHandler}
        />
        <p>{props.questionTitle}</p>
      </div>
      {isShown && <div className={classes.anwser}>{props.questionText}</div>}
    </div>
  );
};

export default Question;
