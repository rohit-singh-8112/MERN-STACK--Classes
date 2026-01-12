import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider =({children})=>{
 const [theme, setTheme] = useState('light');

 const mode = () =>{
  setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
 }
 const valueTheme ={
  theme: theme,
  mode: mode
 }
return<ThemeContext.Provider value={valueTheme}>
  {children}
</ThemeContext.Provider>
}
export default ThemeContext;


