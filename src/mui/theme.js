import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Vazirmatn",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },
  direction: "rtl",
  palette: {
    primary: {
      main: "#E535AB",
    },
    secondary: {
      main: "#61DAFB",
    },
  },
});

export default theme;
