import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  CategoryContainer: {
    fontFamily: "Open Sans",
  },
  Category: {
    margin: "0 30px 2px 0",
    width: "auto",
    "&:hover": {
      cursor: "pointer",
      background: "#503E9D",
      borderRadius: "12px",
      color: "#fff",
      padding: "2px",
      transition: ".5s ease-in-out",
      //   border: "transparent",
    },
  },
  CategoryImage: {
    background: "#F7F7F7",
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
