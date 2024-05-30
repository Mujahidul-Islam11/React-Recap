/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Actor from './components/Actor'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person Name='Dinar' Age='18' Country='Bangladesh'></Person>
    </>
  )
}

function Person (UserInfo){
  const {Name, Age, Country} = UserInfo;
return (
  <>
  <h3>Name: {Name}</h3>
  <h3>Age: {Age}</h3>
  <h3>Country: {Country}</h3>
  </>
)
}
function Device ({name, price}){
return (
  <>
  <h2>Name: {name}</h2>
  <h2>Price: {price}</h2>
  <p>Props (properties) are the way to pass data from one component to another</p>
  </>
)
}
function Student ({name}){
return (
  <>
  <h2>Name: {name}</h2>
  </>
)
}

export default App
