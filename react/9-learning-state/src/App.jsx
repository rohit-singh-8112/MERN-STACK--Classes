import { useState } from 'react'
import List from '../../../MERN_Live/3-React/12-learing-state/src/components/List';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(["rohit", "komal", "ankit"]);
    const handler = (e) => {
    if (e.key == "Enter") {
      const newArr = [...count, e.target.value];
      setCount(newArr)
      // alert(`New Array is ${newArr}`);
      e.target.value = ''
    }
  }

  return (
    <>
    <List list={count}></List>
     
     <input type="text" placeholder='Enter Name' onKeyDown={handler} />
     
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
