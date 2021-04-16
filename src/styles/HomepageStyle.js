import { makeStyles } from "@material-ui/core/styles";
import breakpoint from "../variables/breakpoint";

const useStyle = makeStyles({
  Homepage: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  HomepageRestr: {
    width: "90%",
    margin: "2.5rem 0",
  },

  RestrCardList: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [breakpoint.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [breakpoint.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.5rem",
    },
  },
});

export { useStyle };
