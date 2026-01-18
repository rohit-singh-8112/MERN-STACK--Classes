import { useReducer, useRef } from "react"

const numbers =(astate,action)=>{
  if (action.type ==='INCRIMENT'){
    return astate +=1;
  }else if (action.type ==='DECRIMENT'){
    return astate -=1;
  }else if (action.type ==='ADD'){
    return(astate = astate + parseInt(action.payload.values));
  }
  return astate;
}

function App() {
  const nums = 0;
  const inputVal = useRef();
  const [astateval, counterDispatch] = useReducer(numbers,nums);

  const incriseval = () =>{
    counterDispatch({
      type: 'INCRIMENT'
    });
  }
  const decriseval = () =>{
    counterDispatch({
      type:'DECRIMENT'
    });
  }
  const addInput=()=>{
    const values = inputVal.current.value;
    inputVal.current.value = '';
    counterDispatch({
      type: 'ADD',
      payload:{values}
    });

  }

  return (
    <>
    <div>value:{astateval}</div>
    <button onClick={incriseval}>incrise</button>
    <button onClick={decriseval}>decrise</button>
    <input type="number" ref={inputVal} placeholder="Enter a number:"/>
    <button onClick={addInput}>add</button>

    </>
  )
}

export default App
