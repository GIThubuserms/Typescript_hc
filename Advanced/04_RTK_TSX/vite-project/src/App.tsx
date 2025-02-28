import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, setcounter } from "./hooks/reducers"
import { storetype } from './hooks/store/index';


function App() {


  const dispatch=useDispatch()
  const count=useSelector((state:storetype)=>state.counter)
  const [val,setval]=useState<number>(0)
   
  return (
    <>
      <div>
      <p>{count}</p>
      <button onClick={()=>dispatch(increment())} id="btn" className="btn1"></button>
      <button onClick={()=>dispatch(decrement())} id="btn" className="btn2"></button>
      <input   type="number"  onChange={(e)=>setval(Number(e.target.value))} />
      <button  id="btn" onClick={()=>{dispatch(setcounter(val))}} className="btn3"></button>
      </div>
    </>
  )
}

export default App
