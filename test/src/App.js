/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import ProtoTypes from 'prop-types'
import { increment, decrement } from './redux/actions'

export default class App extends Component {
  static propTypes = {
    store: ProtoTypes.object.isRequired
  }
  constructor(props) {
    super(props)

    this.numRef = React.createRef()
  }
  increase = () => {
    const num = this.numRef.current.value
    this.props.store.dispatch(increment(num))
  }
  decrease = () => {
    const num = this.numRef.current.value
    this.props.store.dispatch(decrement(num))
  }
  increaseIfodd = () => {
    const num = Number(this.numRef.current.value)
    if (this.props.store.getState() % 2 === 1) {
      this.props.store.dispatch(increment(num))
    }
  }
  increaseAsync = () => {
    const num = Number(this.numRef.current.value)
    setTimeout(() => {
      this.props.store.dispatch(increment(num))
    }, 1000);
  }
  render() {
    const count = this.props.store.getState()
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
