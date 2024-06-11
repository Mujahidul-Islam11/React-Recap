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

## UseState hook 
useState hook is used for storing data and can change data when users interact with any feature.

## UseEffect hook
Event handlers contain side effects (they change program's state) caused by a specific user action (for example a button clicked or typing)


## Prerequisites
- ES5 VS ES6
- Array, Objects & Functions
- Array methods (map, filter, reduce, find, find Index )
- Destructuring
- Rest & Spread Operator
- try catch
- async await
- promises

### React
- what is react? how does it works?
- real DOM Vs Virtual DOM 
- How does JSX works?
- React components, what is lifecycle in components & props?
- What is react State?
- React event handling
- React Conditional rendering
- Lifting state up
- React Higher Order Components (HOC)
- What are react hooks?
- React router & private route
- React data fetching, axios swr & tanstack query 
- More way to handle state like redux
### Prerequisites Answer
- React is a JavaScript library, which is used to UI. Especially it is used for single page web apps. It is an declarative & component-based UI library.     bangla:- রিয়েক্ট হল একটি জাভাস্ক্রিপ্ট লাইব্রেরি, যা UI- বানাতে তে ব্যবহৃত হয়। বিশেষ করে এটি সিঙ্গেল পেজ ওয়েব অ্যাপের জন্য ব্যবহৃত হয়। এটি একটি ডীক্লারেটিব এবং কম্পোনেন্ট বেসড UI লাইব্রেরি। Basically, we use html, css and javascript in websites. Now behind the scene browser creates a DOM tree, where users can interact with it. Browser says this process to be a critical render path [].                        bangla:- মূলত, আমরা ওয়েবসাইটগুলিতে html, css এবং javascript ব্যবহার করি। এখন বিহাইন্ড দি সিন ব্রাউজার একটি DOM ট্রি তৈরি করে, যেখানে ইউজার এটির সাথে যোগাযোগ বা ইন্টারেক্ট করতে পারে। ব্রাউজার এই প্রক্রিয়াটিকে একটি ক্রিটিকাল রেন্ডার পাথ বলে []।                 Browser parses the HTML file and creates a DOM tree. It also parses the CSS file and creates a style rules, which is called CSSOM (CSS Object Model). After parsing the files the browser attached the object models together and creates a render three, which goes through a layout process, after that we can see the UI in display. If users make a change in UI, this process starts again from the scratch, which makes the webpage slow.