import React from 'react'
import {Search} from 'lucide-react'

const SearchBox = () => {
  return (
    <div className='flex justify-center item-center my-auto'>
      <Search className='bg-gray-400 rounded-tl-3xl rounded-bl-3xl px-1 justify-center item-center'/>
      <input type="text" className='bg-gray-400 rounded-tr-3xl rounded-br-3xl outline-none justify-center item-center' />
    </div>
  )
}

export default SearchBox
