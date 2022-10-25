import React, { Component } from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const obj = calculate(this.state, e.target.textContent);
    this.setState(obj);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <div className="container">
          <div className="display">
            <span>
              { total }
              { operation }
              { next }
            </span>
          </div>
          <div className="row">
            <button type="button" onClick={this.handleClick} className="btn">AC</button>
            <button type="button" onClick={this.handleClick} className="btn">+/-</button>
            <button type="button" onClick={this.handleClick} className="btn">%</button>
            <button type="button" onClick={this.handleClick} className="btn operator">÷</button>
          </div>
          <div className="row">
            <button type="button" onClick={this.handleClick} className="btn">7</button>
            <button type="button" onClick={this.handleClick} className="btn">8</button>
            <button type="button" onClick={this.handleClick} className="btn">9</button>
            <button type="button" onClick={this.handleClick} className="btn operator">x</button>
          </div>
          <div className="row">
            <button type="button" onClick={this.handleClick} className="btn">4</button>
            <button type="button" onClick={this.handleClick} className="btn">5</button>
            <button type="button" onClick={this.handleClick} className="btn">6</button>
            <button type="button" onClick={this.handleClick} className="btn operator">-</button>
          </div>
          <div className="row">
            <button type="button" onClick={this.handleClick} className="btn">1</button>
            <button type="button" onClick={this.handleClick} className="btn">2</button>
            <button type="button" onClick={this.handleClick} className="btn">3</button>
            <button type="button" onClick={this.handleClick} className="btn operator">+</button>
          </div>
          <div className="last-row">
            <button type="button" onClick={this.handleClick} className="btn">0</button>
            <button type="button" onClick={this.handleClick} className="btn">.</button>
            <button type="button" onClick={this.handleClick} className="btn operator">=</button>
          </div>
        </div>
      </>
    );
  }
}
