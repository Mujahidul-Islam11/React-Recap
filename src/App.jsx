/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Actor from './components/Actor'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Components are the building blocks of user interface.
          In a react app each of the parts in the user interface is a component.
          Component allow us to split ui into independent, reusable parts that can be managed 
          separately.
        </p>
      </div>
      <p>
        Jsx is a syntax extension for javascript.
        JSX stand for JavaScript XML.
        It helps you to right html like markup inside javascript. 
        Return a single root element
      </p>
      {/* <Person></Person>
      <Device name="RedMi" price="8000"></Device>
      <Student name="Dinar"></Student> */}
      <Actor Name={"Bappa Raz"} hello="Hello"></Actor>
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
