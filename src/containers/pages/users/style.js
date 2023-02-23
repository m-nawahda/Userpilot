import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  coverBox: {
    height: "15vh",
    backgroundColor: "#2050AD",
  },
  profileInfoBox: {
    height: "50vh",
    width: "100%",
    position: "absolute",
    top: "calc(15vh - 7vh)",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "10px",
  },
  usersPage: {
    backgroundColor: "#E5E5E5",
    height: "100%",
    width: "100%",
  },
});
