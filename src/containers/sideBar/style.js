import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  sideBar: {
    height: "100%",
    boxSizing: "border-box",
    position: "relative",
    paddingTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    rowGap: 60,
    backgroundColor: "#363740",
  },
  list: {
    width: "100%",
  },
  listItem: {
    height: "6vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "20px",
    marginBottom: "10px",
  },
});
