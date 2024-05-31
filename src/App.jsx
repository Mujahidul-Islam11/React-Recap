/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Actor from './components/Actor'
import './App.css'

function App() {
const handleClick = () =>{
  alert("Button clicked")
}
const handleClick2 = () =>{
  alert("Button2 clicked")
}
  return (
    <>
    <h3>React core concepts 2</h3>
    <button onClick={handleClick}>Click me</button>
    <button onClick={()=> handleClick2()}>Click me2</button>
    </>
  )
}

export default App
