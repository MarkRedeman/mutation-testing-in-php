// Import theme
import createTheme from "spectacle/lib/themes/default";


let theme = createTheme({
  primary: "rgb(9, 196, 127)"
});

theme.screen.components = Object.assign(theme.screen.components, {
    tableHeaderItem: {
      fontSize: "2.66rem",
      fontWeight: "bold",
      padding: "0 10px"
    },
    tableItem: {
      fontSize: "2.66rem",
      padding: "0 10px"
    },
    table: {
      width: "100%"
    }
});

theme.print.components = Object.assign(theme.print.components, {
    tableHeaderItem: {
      fontSize: "2.66rem",
      fontWeight: "bold"
    },
    tableItem: {
      fontSize: "2.66rem"
    },
    table: {
      width: "100%"
    },
});

export default theme;

