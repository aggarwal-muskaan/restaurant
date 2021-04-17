import { makeStyles } from "@material-ui/core/styles";
import { GREY_COLOR, ORANGE_COLOR } from "../variables/colors";

const useStyle = makeStyles({
  CategoriesHolder: {
    width: "90%",
  },

  // CategoryContainer: {
  //   lineHeight: "2rem",
  // },

  Category: {
    margin: "0 30px 2px 0",
    width: "auto",
    cursor: "pointer",

    "&:hover h3": {
      color: ORANGE_COLOR,
    },
  },
  CategoryImage: {
    background: GREY_COLOR,
    borderRadius: "12px",
    // width: "44px",
    // height: "44px",
  },
  CategoryValue: {
    fontFamily: "Open Sans",
    paddingLeft: "6px",
    margin: 0,
  },
});

export { useStyle };
