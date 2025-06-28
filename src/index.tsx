import React from "react";
import App from "./App";
import withThemeProvider from "./withThemeProvider";
import { createRoot } from "react-dom/client";

const ThemedApp = withThemeProvider(App);

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ThemedApp />
  </React.StrictMode>
);
