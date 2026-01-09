

const Display = ({ value }) => {
  return <>
  {value ? <input type="text" value={value} readOnly className="border-2 bg-amber-200 border-yellow-400 p-2 m-2 w-60 text-right"/> : <input type="text" value="0" readOnly className="border-2 border-black p-2 m-2 w-60 text-right"/>}
  </>
} 

export default Display;