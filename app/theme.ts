import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
  colors: {
    main: {
      500: "#FF3DE0",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          backgroundColor: "white !important",
          borderWidth: "2px",
          boxShadow: "0 0 0 1px #D3D3D3",
        },
      },
      sizes: {
        md: {
          field: {
            backgroundColor: "white !important",
            borderWidth: "2px",
            boxShadow: "0 0 0 1px #D3D3D3",
          },
        },
      },
      variants: {
        readonly: {
          field: {
            borderWidth: "2px",
            boxShadow: "0 0 0 1px #D3D3D3",
          },
        },
        filled: {
          field: {
            backgroundColor: "white !important",
            borderWidth: "unset !important",
            boxShadow: "unset !important",
            borderRadius: "8px",
          },
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "900",
        borderRadius: "6px",
        fontSize: "12px",
      },
      sizes: {
        md: {
          fontSize: "sm",
          fontWeight: "900",
        },
      },
    },
  },
});

export default theme;
