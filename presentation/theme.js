// Import theme
import createTheme from "spectacle/lib/themes/default";

let theme = createTheme({
  primary: "rgb(9, 196, 127)"
});

const colors = {
  primary: "rgb(9, 196, 127)",// "#09b5c4",
  secondary: "black",
  tertiary: "white"
};

const fonts = {
  primary: "Open Sans Condensed",
  secondary: "Lobster Two",
  tertiary: "monospace"
};

// theme.screen.components = Object.assign(theme.screen.components, {
//     tableHeaderItem: {
//       fontSize: "2.66rem",
//       fontWeight: "bold",
//       padding: "0 10px"
//     },
//     tableItem: {
//       fontSize: "2.66rem",
//       padding: "0 10px"
//     },
//     table: {
//       width: "100%"
//     }
// });

theme.screen = Object.assign(theme.screen, {
  global: {
    body: {
      background: colors.primary,
      fontFamily: fonts.primary,
      fontWeight: "normal",
      fontSize: "2.25em",
      color: colors.secondary,
      overflow: "hidden"
    },
    "html, body": {
      height: "100%"
    },
    "*": {
      boxSizing: "border-box"
    },
    "code[class*=\"language-\"], pre[class*=\"language-\"]": {
      display: "block"
    },
    "li > div": {
      display: "inline"
    }
  },
  progress: {
    pacman: {
      container: {
        position: "absolute",
        bottom: "5px",
        left: "50%",
        transition: "all 1s ease-in-out 0.2s",
        zIndex: 1000
      },
      pacman: {
        position: "absolute",
        transition: "left 0.3s ease-in-out 0.2s",
        width: "20px",
        height: "20px",
        transform: "translate(-5px, -5px)"
      },
      pacmanTop: {
        position: "absolute",
        content: " ",
        width: "20px",
        height: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        background: colors.tertiary
      },
      pacmanBottom: {
        position: "absolute",
        content: " ",
        width: "20px",
        height: "10px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        background: colors.tertiary,
        top: "10px"
      },
      point: {
        position: "absolute",
        float: "left",
        background: "transparent",
        width: "10px",
        height: "10px",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: colors.tertiary,
        borderRadius: "50%",
        transition: "all 0.01s ease-out 0.4s"
      }
    },
    bar: {
      container: {
        position: "absolute",
        height: '10px',
        width: '100%',
        bottom: 0,
        left: 0,
        transition: "all 1s ease-in-out 0.2s",
        zIndex: 1000
      },
      bar: {
        height: '100%',
        background: colors.tertiary,
        transition: "all 0.3s ease-out"
      }
    },
    number: {
      container: {
        position: "absolute",
        bottom: 10,
        right: 10,
        zIndex: 1000,
        color: colors.tertiary
      }
    }
  },
  components: {
    blockquote: {
      textAlign: "left",
      position: "relative",
      display: "inline-block"
    },
    quote: {
      borderLeft: "1px solid " + colors.primary,
      paddingLeft: 40,
      display: "block",
      color: colors.primary,
      fontSize: "4.5rem",
      lineHeight: 1,
      fontWeight: "bold"
    },
    cite: {
      color: colors.tertiary,
      display: "block",
      clear: "left",
      fontSize: "2rem",
      marginTop: "1rem"
    },
    content: {
      margin: "auto",
      textAlign: "center"
    },
    codePane: {
      pre: {
        margin: "20px auto",
        fontSize: "1rem",
        fontWeight: "normal",
        fontFamily: fonts.tertiary,
        minWidth: "100%",
        maxWidth: 800,
        padding: "0 5px 0 0"
      },
      code: {
        textAlign: "left",
        padding: 20,
        fontWeight: "normal"
      }
    },
    heading: {
      h1: {
        color: colors.tertiary,
        fontSize: "7.05rem",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: 0,
        zoom: 1
      },
      h2: {
        color: colors.secondary,
        fontSize: "5.88rem",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: 0
      },
      h3: {
        color: "black",
        fontSize: "4.9rem",
        fontFamily: fonts.secondary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      },
      h4: {
        color: "black",
        fontSize: "3.82rem",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      },
      h5: {
        color: "black",
        fontSize: "3.19rem",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      },
      h6: {
        color: "black",
        fontSize: "2.66rem",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      }
    },
    image: {
      display: "block",
      margin: "0.5em auto"
    },
    link: {
      textDecoration: "none"
    },
    listItem: {
      fontSize: "2.66rem"
    },
    list: {
      textAlign: "left",
      listStylePosition: "inside",
      padding: 0
    },
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
    },
    s: {
      strikethrough: {}
    },
    text: {
      color: "black",
      fontSize: "2.66rem",
      fontFamily: fonts.primary,
      margin: "0.25em auto"
    }
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
