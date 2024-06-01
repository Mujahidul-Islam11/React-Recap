/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Actor from './components/Actor'
import './App.css'
import { useState } from 'react'
import Users from './components/Users';

function App() {
const [count, setCount] = useState(0);
  return (
    <>
    <h3>React core concepts 2</h3>
    <h2>Counter: {count}</h2>
    <button onClick={()=> setCount(count+1)}>Add</button>
    <button onClick={()=> count> 0 && setCount(count-1)}>Reduce</button>
    <Users></Users>
    </>
  )
}

export default App
