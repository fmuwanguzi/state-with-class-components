import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'


class App extends Component {
constructor(){
  super()
  this.state={
    count:0,
  }

}

  increment = () => {
    const currentCount = this.state.count
    const newCount = currentCount + 1
    
    this.setState({ count: newCount})

  }

  decrement = () => {
    const currentCount = this.state.count
    const newCount = currentCount - 1
    
    this.setState({ count: newCount})

  }

  render() {
  return (
    <div>
      <h1> {this.state.count} </h1>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
    </div>
    )
  }
}

export default App;
