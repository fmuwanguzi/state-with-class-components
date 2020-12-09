import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'


class App extends Component {
constructor(){
  super()
  this.state={
    count:0,
    inputtedNumber: 0,
  }

}

  increment = () => {
    //const amountToAdd = prompt('How much do you want to add?' )
    
    const newCount = this.state.count + this.state.inputtedNumber
    // const newCount = currentCount + 1
    
     this.setState({ count: newCount})
}

  decrement = () => {
    //const amountToSub = prompt('How much do you want tosubtract? ')
   
    // const currentCount = this.state.count
    // const newCount = this.state.count - parseInt(amountToSub)
    const newCount = this.state.count - this.state.inputtedNumber    
    this.setState({ count: newCount })
}

  changeInput = (evt) => {
    //console.log(evt.target.value)
    let newValue = parseInt(evt.target.value) || 0
    this.setState({inputtedNumber: newValue})
  }

  render() {
  return (
    <div>
      <h1> {this.state.count} </h1>
      <input value={this.state.inputtedNumber} onChange={this.changeInput}/>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
    </div>
    )
  }
}

export default App;
