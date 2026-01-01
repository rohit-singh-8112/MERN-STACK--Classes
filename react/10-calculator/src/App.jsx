// import { useState } from 'react'

import Display from "./component/Display"
import NumPad from "./component/NumPad"
import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState('');

  return (
    <>
      <h1>Calculator</h1>
      <Display value={displayValue} />
      <NumPad displayValue={displayValue} setDisplayValue={setDisplayValue} />
    </>
  )
}

export default App
