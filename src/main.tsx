// import { MathJaxContext } from "better-react-mathjax";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ThemeContext";
import { Toaster } from "./components/ui/toaster";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <MathJaxContext
      config={{
        loader: { load: ["tex-svg"] },
        jax: ["input/TeX", "output/svg"],
        tex: {
          packages: { "[+]": ["svg"] },
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
          displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"],
          ],
          maxBuffer: 100 * 1024,
        },
        startup: {
          output: "svg",
        },
        options: {
          enableMenu: false,
        },
        // svg: {
        //   scale: 1,
        // },
      }}
      version={3}
      hideUntilTypeset="first"
    > */}
      <ThemeProvider>
        <App />
        <Toaster />
      </ThemeProvider>
    {/* </MathJaxContext> */}
  </React.StrictMode>
);
