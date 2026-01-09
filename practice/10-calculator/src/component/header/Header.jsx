import React from 'react'
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <div className='w-full bg-blue-400 flex '>
      <div className="flex  bg-red-500">

      </div>
       <div className='flex flex-wrap justify-center item-center '>
        <a href='#' className='px-1 text-black opacity-70 hover:bg-gray-100 hover:rounded-lg py-0.5 hover:opacity-50'>Software Tools</a>
        <a href='#' className='px-1 text-black opacity-70 hover:bg-gray-100 hover:rounded-lg py-0.5 hover:opacity-50'>Product</a>
        <a href='#' className='px-1 text-black opacity-70 hover:bg-gray-100 hover:rounded-lg py-0.5 hover:opacity-50'>Solution</a>
        <a href='#' className='px-1 text-black opacity-70 hover:bg-gray-100 hover:rounded-lg py-0.5 hover:opacity-50'>Blog</a>
        <a href='#' className='px-1 text-black opacity-70 hover:bg-gray-100 hover:rounded-lg py-0.5 hover:opacity-50'>Who It's for</a>
        <a href='#' className='px-1 text-black opacity-70 hover:bg-gray-100 hover:rounded-lg py-0.5 hover:opacity-50'>About</a>
      </div>
      <div className="flex ">
        <SearchBox />
      </div>
      
    </div>
  )
}

export default Header;
