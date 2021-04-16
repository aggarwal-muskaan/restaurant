import { makeStyles } from "@material-ui/core/styles";
import {
  NAVY_BLUE_COLOR,
  LIGHT_GREY,
  ORANGE_COLOR,
  LIGHT_PINK,
  GREY_COLOR,
  DARK_GREY,
} from "../variables/colors";

const useStyle = makeStyles({
  FilterDrawerContainer: {
    // borderRadius: "24px 0 0 24px",
    // minWidth
    maxWidth: "350px",
    padding: "32px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  DrawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    "& h2": {
      margin: 0,
    },
    "& img:hover": {
      cursor: "pointer",
    },
  },

  //removed default material-ui styles
  openToggleButton: {
    border: "none !important",
    padding: "5px !important",
    "&:hover, &:active,&:focus": {
      border: "none !important",
      background: "none !important",
      cursor: "unset",
    },
  },
  activeToggleButton: {
    border: "none !important",
    background: "none !important",
  },

  fireIconContainer: {
    borderRadius: "9px",
    padding: "6px 12px",
    background: LIGHT_GREY,
    marginRight: "1rem",
    cursor: "pointer",
    // width: "48px",
    // height: "48px",
  },

  activeFireIcon: {
    background: LIGHT_PINK,
  },

  CuisinesContainer: {
    display: "block",
  },

  cuisineBtn: {
    background: GREY_COLOR,
    color: DARK_GREY,
    borderRadius: "6px",
    padding: "10px",
    cursor: "pointer",
    fontSize: "16px",
    border: "none",
    outline: "none",
    fontFamily: "Open Sans",
  },

  activeCuisineBtn: {
    // transition: ".6s ease",
    background: LIGHT_PINK,
    fontWeight: 600,
    color: ORANGE_COLOR,
  },

  openText: {
    fontWeight: 600,
    textTransform: "lowercase",
  },

  activeOpenText: {
    color: ORANGE_COLOR,
  },

  seeMore: {
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      color: ORANGE_COLOR,
      cursor: "pointer",
      fontWeight: 600,
    },
    "& img:hover": {
      cursor: "pointer",
    },
  },

  ApplyButton: {
    fontFamily: "Open Sans",
    borderRadius: "12px",
    letterSpacing: "1px",
    cursor: "pointer",
    wordSpacing: "3px",
    color: LIGHT_GREY,
    background: NAVY_BLUE_COLOR,
    border: "none",
    outline: "none",
  },
});
export { useStyle };
