import React,{useContext} from 'react'
import ThemeContext from '../storage/ThemeContext'

const Dark = ({children}) => {
  const {theme}=useContext(ThemeContext)
  return (
    <div className ={`${theme==='light'? "bg-yellow-500 text-black h-screen":"bg-black text-white h-screen"}`} >
      {children}
    </div>
  )
}

export default Dark
