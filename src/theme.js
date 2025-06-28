import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7C5CFA",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F3F0FF",
    },
    background: {
      default: "#F3F0FF",
      paper: "#fff",
    },
    text: {
      primary: "#232323",
      secondary: "#7C5CFA",
    },
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
