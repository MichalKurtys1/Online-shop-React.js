import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faAngleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./QuestionCategory.module.css";
import { useState } from "react";
import Question from "./Question";

const QuestionCategory = (props) => {
  const [isShown, setIsShown] = useState(props.shown);

  const clickHandler = () => {
    if (isShown === false) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  };
  let icon;

  if (!isShown) {
    icon = faAngleRight;
  } else {
    icon = faAngleDown;
  }

  return (
    <div className={classes.box}>
      <div className={classes.category}>
        <p>{props.title}</p>
        <FontAwesomeIcon
          icon={icon}
          className={classes.angleIcon}
          onClick={clickHandler}
        />
      </div>
      {isShown && (
        <div className={classes.questions}>
          {props.questions.map((question) => (
            <Question
              questionTitle={question.question}
              questionText={question.text}
            />
          ))}
        </div>
      )}
      <div style={{ margin: "30px" }}></div>
    </div>
  );
};

export default QuestionCategory;
