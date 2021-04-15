import React, { useContext } from "react";
import { useToggle } from "../../hooks/useToggle";
import { filterRestr } from "../../contexts/filterRest.context";

import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import { useStyle } from "../../styles/Category";

import baked from "../../assets/category/baked.svg";
import sweet from "../../assets/category/sweet.svg";
import hotdish from "../../assets/category/hotdish.svg";
import fastfood from "../../assets/category/fastfood.svg";

function Category() {
  // const [click, toggleClick] = useToggle(false);
  const dispatch = useContext(filterRestr);
  const classes = useStyle();
  const categories = [
    {
      icon: baked,
      text: "Baked",
    },
    {
      icon: sweet,
      text: "Sweet",
    },
    {
      icon: hotdish,
      text: "Hot Dish",
    },
    {
      icon: fastfood,
      text: "Fast Food",
    },
    {
      icon: fastfood,
      text: "Salads",
    },
  ];

  const handleClick = (category) => {
    dispatch({ type: "filterByCategory", value: category });
  };

  return (
    <div>
      <h2>Category</h2>
      <div>
        <Grid
          container
          direction="row"
          wrap="wrap"
          // justify="space-evenly"
          className={classes.CategoryContainer}
        >
          {categories.map((c) => (
            <Grid
              onClick={() => handleClick(c.text)}
              container
              key={c.text}
              spacing={1}
              // xs={3}
              // sm={2}
              wrap="nowrap"
              className={classes.Category}
            >
              <Grid item className={classes.CategoryImage}>
                <img src={c.icon} alt={c.text} />
              </Grid>
              <Grid item>
                <h3 className={classes.CategoryValue}>{c.text}</h3>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Category;
