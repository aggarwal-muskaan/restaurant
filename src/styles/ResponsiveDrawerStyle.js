import { makeStyles } from "@material-ui/core/styles";
import breakpoints from "../variables/breakpoint";
const useStyle = makeStyles({
  drawer: {
    [breakpoints.up("sm")]: {
      width: "300px",

      // TODO  make drawer width variable
      flexShrink: 0,
    },
  },
});

export { useStyle };
