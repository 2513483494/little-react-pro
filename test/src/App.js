/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.numRef = React.createRef()
  }
  increase = () => {
    const num = this.numRef.current.value
    this.setState(state => ({count: state.count + Number(num)}))
  }
  decrease = () => {
    const num = this.numRef.current.value
    this.setState(state => ({count: state.count - Number(num)}))
  }
  increaseIfodd = () => {
    const num = Number(this.numRef.current.value)
    if(this.state.count%2===1){
      this.setState(state => ({count: state.count + Number(num)}))
    }
  }
  increaseAsync = () => {
    const num = Number(this.numRef.current.value)
    setTimeout(() => {
      this.setState(state => ({count: state.count + num}))
    }, 1000);
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={this.numRef}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
          <button onClick={this.increaseIfodd}>ifodd</button>
          <button onClick={this.increaseAsync}>ifasync</button>
        </div>
      </div>
    )
  }
};
