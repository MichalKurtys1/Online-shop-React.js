import classes from "./Pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
  return (
    <div className={classes.wrap}>
      <div className={classes.icons}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} className={classes.icon} />
        <FontAwesomeIcon icon={faAngleLeft} className={classes.icon} />
      </div>
      <div className={classes.pages}>
        <div className={classes.page}>1</div>
        {/* <div className={classes.page}>2</div>
        <div className={classes.page}>3</div>
        <div className={classes.page}>...</div>
        <div className={classes.page}>7</div>
        <div className={classes.page}>8</div>
        <div className={classes.page}>9</div> */}
      </div>
      <div className={classes.icons}>
        <FontAwesomeIcon icon={faAngleDoubleRight} className={classes.icon} />
        <FontAwesomeIcon icon={faAngleRight} className={classes.icon} />
      </div>
    </div>
  );
};

export default Pagination;
