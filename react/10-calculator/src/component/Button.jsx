import React from 'react'

const Button = ({ label, onClickHandler }) => {
  return (
    <button className="text-black bg-gray-200 hover:bg-gray-300 rounded-lg p-4 m-2 cursor-pointer" onClick={onClickHandler}>{label}</button>
  )
}

export default Button;
