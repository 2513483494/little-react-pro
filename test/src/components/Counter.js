import React, { Component } from 'react';
import ProtoTypes from 'prop-types'
/*
UI组件
  主要做显示与用户交互
  代码中不操作redux
*/
export default class Counter extends Component {
  //需要获取
  static propTypes = {
    count: ProtoTypes.number.isRequired,
    increment: ProtoTypes.func.isRequired,
    decrement: ProtoTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.numRef = React.createRef()
  }
  increase = () => {
    const num = this.numRef.current.value
    this.props.increment(num)
  }
  decrease = () => {
    const num = this.numRef.current.value
    this.props.decrement(num)
  }
  increaseIfodd = () => {
    const num = Number(this.numRef.current.value)
    if (this.props.count % 2 === 1) {
      this.props.increment(num)
    }
  }
  increaseAsync = () => {
    const num = Number(this.numRef.current.value)
    setTimeout(() => {
      this.props.increment(num)
    }, 1000);
  }
  render() {
    const count = this.props.count
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
