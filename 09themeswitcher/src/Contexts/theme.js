import { createContext, useContext } from "react";

export const ThemeContext = createContext({// Default values =
    themeMode: "light",// variables too
    darkTheme: () => {},// methods too
    lightTheme: () => {},// methods too
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}