import { makeStyles } from "@material-ui/core/styles";
import {
  LIGHT_PINK,
  ORANGE_COLOR,
  LIGHT_BLUE,
  NAVY_BLUE_COLOR,
} from "../variables/colors";

const useStyle = makeStyles({
  CardInfo: {
    minWidth: "300px",
    maxWidth: "330px",
    cursor: "pointer",
  },
  CardImage: {
    width: "100%",
    minHeight: "150px",

    maxHeight: "170px",
    backgroundSize: "cover",
    borderRadius: "16px",
  },
  CardHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 0",
    "& h4": {
      margin: 0,
    },
  },
  RestrLabel: {
    fontWeight: 600,
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "11px",
    background: LIGHT_BLUE,
    color: NAVY_BLUE_COLOR,
  },

  RestrClosed: {
    background: LIGHT_PINK,
    color: ORANGE_COLOR,
  },

  CardContent: {
    fontSize: "12px",
  },
});
export { useStyle };
