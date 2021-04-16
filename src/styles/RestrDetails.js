import { makeStyles } from "@material-ui/core/styles";
import { NAVY_BLUE_COLOR, DARK_GREY, ORANGE_COLOR } from "../variables/colors";

const useStyle = makeStyles({
  RestrPage: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  HeaderBtns: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    margin: "2.5rem 0",
  },
  navigationButton: {
    borderRadius: "10px",
    height: "48px",
    width: "48px",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
  goBackButton: {
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
    // "& p": {
    //   position: "absolute",
    //   right: "4.5%",
    //   top: "5%",
    //   fontSize: "80%",
    //   padding: ".5em",
    //   borderRadius: "50%",
    //   // lineHeight: "1em",
    //   color: " #fff",
    //   background: "black",
    //   textAlign: "center",
    //   minWidth: "1em",
    // },
  },
  RestrDetailContainer: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",

    "& section, & span, & p": {
      color: DARK_GREY,
      margin: 0,
    },
  },

  RestrInnerContainer: {
    width: "47%",
  },

  RestrInfo: {
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
    "& img , & svg": {
      marginRight: "1rem",
    },
  },

  RestrWebsiteLink: {
    cursor: "pointer",
    "&:hover": {
      "& span": {
        color: "blue",
        textDecoration: "underline",
      },
    },
  },

  RestrImage: {
    width: "50%",
    maxHeight: "370px",
    borderRadius: "16px",
    backgroundSize: "cover",
    objectFit: "cover",
  },

  MenuError: {
    fontStyle: "italic",
    color: ORANGE_COLOR,
  },

  ErrorPage: {
    textAlign: "center",
  },

  ExploreBtn: {
    borderRadius: "6px",
    padding: "1rem",
    border: "none",
    outline: "none",
    backgroundColor: ORANGE_COLOR,
    cursor: "pointer",
    color: "#fff",
    fontSize: "20px",
    fontWeight: 600,
  },
});

export { useStyle };
