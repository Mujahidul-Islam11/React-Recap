
<h2> Prerequisites </h2>
<ul>
  <li>ES5 vs ES6</li>
  <li>Array, Objects & Functions</li>
  <li>Array methods (map, filter, reduce, find, find Index )</li>
  <li>Destructuring</li>
  <li>Rest & Spread Operator</li>
  <li>try catch</li>
  <li>async await</li>
  <li>promises</li>
</ul>


<h2>Questions about ReactJs concepts</h2>
<ul>
  <li>What is React? How does it works?</li>
  <li>Real DOM vs Virtual DOM</li>
  <li>How does JSX work?</li>
  <li>React components, what is lifecycle in components & props?</li>
  <li>What is React hook & what is state?</li>
  <li>React event handling</li>
  <li>React Conditional rendering</li>
  <li>Lifting state up</li>
  <li>React Higher Order Components (HOC)</li>
  <li>What are React hooks?</li>
  <li>React router & private route</li>
  <li>React data fetching, axios, SWR & TanStack Query</li>
  <li>More ways to handle state like Redux</li>
</ul>

<h4>Answers:</h4>
<ol><li> React is a JavaScript library, which is used to make UI (User Interface). Especially it is used for single page web apps. It is an declarative & component-based UI library. <br/> bangla:- <br/> রিয়েক্ট হল একটি জাভাস্ক্রিপ্ট লাইব্রেরি, যা UI- বানাতে ব্যবহৃত হয়। বিশেষ করে এটি সিঙ্গেল পেজ ওয়েব অ্যাপের জন্য ব্যবহৃত হয়। এটি একটি ডীক্লারেটিব এবং কম্পোনেন্ট বেসড UI লাইব্রেরি। Basically, we use html, css and javascript in websites. Now behind the scene browser creates a DOM tree, where users can interact with it. Browser says this process to be a critical render path []. <br/> bangla:- <br/> মূলত, আমরা ওয়েবসাইটগুলিতে html, css এবং javascript ব্যবহার করি। এখন বিহাইন্ড দি সিন ব্রাউজার একটি DOM ট্রি তৈরি করে, যেখানে ইউজার এটির সাথে যোগাযোগ বা ইন্টারেক্ট করতে পারে। ব্রাউজার এই প্রক্রিয়াটিকে একটি ক্রিটিকাল রেন্ডার পাথ বলে []। </li>

<li> (Real DOM) Browser parses the HTML file and creates a DOM tree. It also parses the CSS file and creates some style rules, which is called CSSOM (CSS Object Model). After parsing the files. The browser attach the object models together and creates a render tree, which goes through a layout process, after that we can see the UI in display. If users make a change in UI, this process starts again from the scratch, which makes the webpage slow. But, React makes our webpage more faster by his Virtual DOM. React creates a initial virtual DOM, when users changes any state in virtual DOM it creates another updated virtual DOM and adds the changes in it. After that it compares the virtual DOM & updated virtual DOM to see that what new has been added inside the DOM, this process is called diffing or reconciliation. Finally it merge the changes in that particular section in the real main DOM, where the change was happened by the user. This process doesn't rerenders the whole DOM again only updates a particular section from the DOM. </li>

<li>JSX's full form is JavaScript XML. JSX is like html, it helps use write html like syntax inside JavaScript. Basically in pure HTML & JS when we create a tag or an element the element is saved on browser as a pure node, but in React when we create any tag or element it is saved as object which is latterly converted into pure JS & HTML.</li>

<li> React component lifecycle is the sequence of the process of component creating, updating, & mounting. In this sequence different lifecycle methods are used, like:- Initialization, Mounting, Updating, Unmounting, Error Handling. The Mounting phase begins when a component is first created & inserted in the DOM. Updating phase occurs when a component's state or props changes. And the Unmounting phase begins when a component is removed from the DOM. Mounting phase hasa three main lifecycle methods. First is constructor() method, it is called when the component is first created. Second is render() method, the render() method is responsible for generating the component's virtual DOM representation based on its current props and state. It is called every time the component needs to be re-rendered, either because its props or state have changed, or because a parent component has been re-rendered.</li>

<li> By using react hooks we can manage functional component's states, also can do lifecycle method work by using hooks without writing any code for creating component lifecycle. It means by using hooks we can implement any kind of functionality without the class based component. React hook was released in february 16 2019, by using react hook we can manage state by writing just few lines of code. But before the hooks, we had to handle everything with class component, we had to manage lifecycle method as well to push a component inside the DOM. <br/>
<b>React Component Lifecycle method:-</b>
<br/>
import React from 'react' <br/>
import ReactDOM from 'react-dom/client'<br/>
import App from './App.jsx'<br/>
import './index.css'<br/>
import './App.css'<br/>
<br/>
class Timer extends React.Component{<br/>
  constructor(props){<br/>
    super(props)<br/>
    this.state={date: new Date()}<br/>
  }<br/>
  componentDidMount(){<br/>
    this.time = setInterval(() => {<br/>
      this.setState({date: new Date()})<br/>
    }, 1000);<br/>
  }<br/>
  componentWillUnmount(){<br/>
    clearInterval(this.time)<br/>
  }<br/>
  render() {<br/>
    return (<br/>
      <div><br/>
        Hello {new Date().toLocaleTimeString(this.props.local)}
      </div><br/>
    )
  }
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Timer local="bn-BD"/>
  </React.StrictMode>,
)


</li> <ol>