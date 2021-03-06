import { makeStyles } from "@material-ui/core/styles";
import { GREY_COLOR, NAVY_BLUE_COLOR, ORANGE_COLOR } from "../variables/colors";
import breakpoints from "../variables/breakpoint";

const useStyle = makeStyles({
  NavigationTop: {
    margin: "2.5rem 0",
    width: "90%",
    [breakpoints.down("sm")]: {
      margin: "1.5rem 0",
    },
  },

  Location: {
    width: "120px",
    display: "flex",
    justifyContent: "space-between",
  },
  LocationName: {
    width: "85px",
    display: "flex",
    justifyContent: "space-between",
    "& h5": { margin: 0 },
  },
  InputContainer: {
    display: "flex",
    alignItems: "center",
    minWidth: "230px",
    maxWidth: "385px",
    borderRadius: "10px",
    padding: "8px 10px",
    // marginTop: "1rem",
    background: GREY_COLOR,
  },
  inputInput: {
    padding: "0 13px",
    width: "370px",
  },
  menuButton: {
    [breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
  navigationButton: {
    borderRadius: "10px",
    height: "48px",
    width: "48px",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
  filterButton: {
    background: NAVY_BLUE_COLOR,
    "&:hover": {
      filter: "brightness(120%)",
    },
  },
  cartButton: {
    background: ORANGE_COLOR,
    "&:hover": {
      filter: "contrast(80%)",
    },
  },

  TopRightNavigation: {
    display: "grid",
    gridColumnGap: "20px",
    gridTemplateColumns: "auto auto auto",
  },
});
export { useStyle };
