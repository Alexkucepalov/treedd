import React, { ComponentType, PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

const withThemeProvider =
  <P extends object>(Component: ComponentType<P>) =>
  (props: PropsWithChildren<P>) =>
    (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );

export default withThemeProvider;
