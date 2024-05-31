## Components are the building blocks of an user interface
Each single element in a web page can be a component.
In every website we can see some common sections like - Header/Navbar, Hero/Banner, Footer
We can create components for the each of the sections, we can work in different components separately.
*note:- to call a component inside an another component we first need to export the component and
to access it inside another component we need to import the component there.

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


    <button onClick={handleClick}>Click me</button>
    <button onClick={handleClick2()}>Click me2</button>
    when we call a function like this, it directly calls it before clicking the button. Because when the compiler has seen that there is function named handleClick2 is called then it will run the all codes inside the function before clicking the button.
    To prevent that action we can use, 

    <button onClick={handleClick}>Click me</button>
    <button onClick={() => handleClick2()}>Click me2</button> // anonymous function
    You will also be able to pass argument now.