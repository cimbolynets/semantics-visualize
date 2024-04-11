// import { MathJaxContext } from "better-react-mathjax";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GuideProvider } from "./components/GuideContext.tsx";
import { ThemeProvider } from "./components/ThemeContext";
import { Toaster } from "./components/ui/toaster";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GuideProvider>
      <ThemeProvider>
        <App />
        <Toaster />
      </ThemeProvider>
    </GuideProvider>
  </React.StrictMode>
);
