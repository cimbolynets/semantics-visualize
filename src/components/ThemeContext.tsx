import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export type Theme = {
  name: string;
  editorTheme: string;
};

const themes: Record<string, Theme> = {
  light: {
    name: "light",
    editorTheme: "vs",
  },
  dark: {
    name: "dark",
    editorTheme: "vs-dark",
  },
};

const ThemeContext = createContext<{
  theme: Theme | undefined;
  themeName: string;
  setThemeName: Dispatch<SetStateAction<string>>;
}>({
  theme: themes["light"],
  themeName: "light",
  setThemeName: () => {},
});

function ThemeProvider({ children }: PropsWithChildren) {
  const [themeName, setThemeName] = useState<string>("light");
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    let targetTheme = themeName;
    if (initialRender) {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) targetTheme = savedTheme;
      if (themeName !== savedTheme) setThemeName(savedTheme ?? "light");
      setInitialRender(false);
    }
    if (targetTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem("theme", targetTheme);
  }, [initialRender, themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, theme: themes[themeName], setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
export { ThemeProvider };
