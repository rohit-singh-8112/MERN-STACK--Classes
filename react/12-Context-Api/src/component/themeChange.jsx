import React,{useContext} from 'react'
import ThemeContext from '../storage/ThemeContext'

const ThemeChange = () => {
  const {theme, mode} = useContext(ThemeContext);
  return (
          <button className="p-2 m-1 bg-blue-400 border-2 border-gray-950 rounded-2xl cursor-pointer" onClick={mode}>Change Theame to {theme ==='light'? "dark":"light"}</button>

  )
}

export default ThemeChange
