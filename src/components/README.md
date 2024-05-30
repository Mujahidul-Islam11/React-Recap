## Components are the building blocks of an user interface
Each single element in a web page can be a component.
In every website we can see some common sections like - Header/Navbar, Hero/Banner, Footer
We can create components for the each of the sections, we can work in different components separately.

## What are Props?
Props (Properties) are the way to create a connection between parent and child components.
We can pass data from one to another component by using props.

### Parent component
function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person Name='Dinar' Age='18' Country='Bangladesh'></Person> // passing props
    </>
  )
}

### Child Component
function Person (UserInfo){             // props received in parameters
  const {Name, Age, Country} = UserInfo; // Destructuring

return (
  <>
  <h3>Name: {Name}</h3>
  <h3>Age: {Age}</h3>
  <h3>Country: {Country}</h3>
  </>
)
}