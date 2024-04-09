import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/ThemeContext";
import { MathJaxContext } from "better-react-mathjax";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MathJaxContext
      config={{
        loader: { load: ["[tex]/html"] },
        tex: {
          packages: { "[+]": ["html"] },
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
          displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"],
          ],
          maxBuffer: 100 * 1024
        },
        options: {
          enableMenu: false
        },
        svg: {
          scale: 5
        }
      }}
      renderMode="post"
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MathJaxContext>
  </React.StrictMode>
);
