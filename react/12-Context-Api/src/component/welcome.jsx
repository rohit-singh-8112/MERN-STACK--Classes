import  React,{ useContext } from 'react'
import ThemeContext from '../storage/ThemeContext';



const Welcome = () => {
  const {theme}= useContext(ThemeContext);
  return (
          <h1 className={`text-2xl ${theme === 'light'?"bg-black text-amber-100" : "bg-yellow-500"}`}>Wellcome to change theme APP</h1>

  )
}

export default Welcome

