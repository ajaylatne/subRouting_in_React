import React, {useState } from 'react'
import Nemo from './Nemo';


function Demo() {
  console.log('demo')
  const [count, setCount] = useState(0);
  const [todo, setTodos] = useState(["to do 1", "to do 2"]);

  
  function inc(){ setCount(count + 1);}
  function dec(){ setCount(count - 1);}

  

  return (
    
    <div style={{border: "2px solid gray", backgroundColor: "yellow"}}>
      <button onClick={inc}>+</button>  
      <p>{ count }</p>
      <button onClick={dec}>-</button>

      <Nemo todo = {todo}/>
    </div>
  )
}

export default Demo
