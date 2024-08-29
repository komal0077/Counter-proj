import React from 'react'
import { useState } from 'react';


function Counter() {
    const [count,setCount]=useState(0);
    return (
      <div className="h-screen flex items-center justify-center">
      <div className="card text-center ">
  <div className='card-body border-2 border-black p-10 inline-block '>
  <h1>Counter App</h1>
  
  <h2>{count}</h2>
  <div className='my-5 flex justify-center'>
    
    <button className='btn mx-3 bg-cyan-600' onClick={()=>setCount(count+1)}>Increment</button>
    <button className='btn mx-3  bg-red-500' onClick={()=>setCount(count-1)}>Decrement</button>
    <button className='btn mx-3 bg-green-400' onClick={()=>setCount(0)}>Reset</button>
  </div>
  </div>
  
      </div>
      
      </div>
    );
}

export default Counter
