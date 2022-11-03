import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
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

  let icon;
  if (isShown === false) {
    icon = faPlus;
  } else {
    icon = faMinus;
  }

  return (
    <div className={classes.questionBox}>
      <div className={classes.question}>
        <FontAwesomeIcon
          icon={icon}
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
