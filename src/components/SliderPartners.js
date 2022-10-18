import classes from "./SliderPartners.module.css";

const SliderCaregorie = (props) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.text}>
          <p>{props.title}</p>
        </div>
        <div className={classes.slider}>
          {props.items.map((category) => (
            <div className={classes.card}>
              <img src={category.image} alt={category.image} />
              <p>{category.title ? category.title : ""}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderCaregorie;
