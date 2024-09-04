import { createContext } from "react";

export const LevelContext=createContext(1);


// We have created a themecontext provider in app
// the value dark will be passed to any children of
// app using the same context via useContext hook
// note how we haven't provided any value for theme
// yet the value shows up in browser

export const ThemeContext=createContext(null);

export const CurrentUserContext=createContext(null);


