# React Component Lifecycle method
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'

class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state={date: new Date()}
  }
  componentDidMount(){
    this.time = setInterval(() => {
      this.setState({date: new Date()})
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.time)
  }
  render() {
    return (
      <div>
        Hello {new Date().toLocaleTimeString(this.props.local)}
      </div>
    )
  }
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Timer local="bn-BD"/>
  </React.StrictMode>,
)



