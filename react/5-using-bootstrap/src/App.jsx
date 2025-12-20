import { useState } from 'react'
import button from './component/button'

import './App.css'
import Button from './component/button'
import {TxtInput, DateInput} from './component/input'
import { InputHandler } from './component/data'

function App() {

  return (
    <>
      <Button btnText="Delete"/>``
      <TxtInput/> 
      <DateInput/>
      <Button type="submit" btnText="Submit" InputHandler={InputHandler}/>

    </>
  )
}

export default App
