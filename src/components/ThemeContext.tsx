import { Dispatch, PropsWithChildren, createContext, useEffect, useReducer } from "react";

export type Theme = {
  name: string;
  editorTheme: string;
  colors: Record<string, string>;
};

const themes: Record<string, Theme> = {
  light: {
    name: "light",
    editorTheme: "vs",
    colors: {
      body: "#fff",
      main: "#418f89",
      secondary: "#f3f3f3",
      secondaryDim: "#fdfdfd",
      background: "#fff",
      text: "#212121",
      textSecondary: "#505050",
      boxShadow: "rgba(0, 0, 0, .25)",
      activeText: "#fff",
    },
  },
  dark: {
    name: "dark",
    editorTheme: "vs-dark",
    colors: {
      body: "#212121",
      main: "#FF79AA",
      secondary: "#505050",
      secondaryDim: "#707070",
      background: "#282A36",
      text: "#fff",
      textSecondary: "#dcdcdc",
      boxShadow: "rgba(255, 255, 255, .25)",
      activeText: "#fff",
    },
  },
  contrast: {
    name: "contrast",
    editorTheme: "hc-black",
    colors: {
      body: "#000",
      main: "#E95E01",
      secondary: "#505050",
      secondaryDim: "#707070",
      background: "#1a1a1a",
      text: "#fff",
      textSecondary: "#dcdcdc",
      boxShadow: "rgba(255, 255, 255, .25)",
      activeText: "#fff",
    },
  },
};

function themeReducer(state: Theme, action: { type: string }) {
  return themes[action.type] ?? state;
}

const ThemeContext = createContext<{ state: Theme; dispatch?: Dispatch<{ type: string }> }>({
  state: themes.light,
});

function ThemeProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(themeReducer, themes.light);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (state.name !== savedTheme) dispatch({ type: savedTheme ?? "light" });
  }, []);

  useEffect(() => {
    if (state.name === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem("theme", state.name);
  }, [state.name]);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
}

export default ThemeContext;
export { ThemeProvider };
