import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  sidebar: {
    position: "absolute",
    width: "300px",
    left: "0%",
    top: "0%",
    height: "100vh",
    background: "#f7f7f7",
    borderRadius: "0px 24px 24px 0px",
  },
  logoContainer: {
    width: "90%",
    position: "absolute",
    left: "10.53%",
    top: "1.5%",
  },

  navigationContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "270px",
    width: "90%",
    position: "absolute",
    padding: "2px",
    left: "16px",
    top: "105px",
  },
  navlinkTab: {
    textDecoration: "none",
  },
  activeNavlink: {
    background: "#503E9D",
    borderRadius: "12px",
    "& p ,& img": {
      color: "#fff",
    },
  },
  navigationTab: {
    width: "calc(91% + 24px)",
    margin: 0,
  },
  navlinkText: {
    color: "#626264",
    fontFamily: "Open Sans",
  },
});

// .navlink-grid .active > div {
//   background-color: blue;
//   color: white;
// }
export { useStyle };
