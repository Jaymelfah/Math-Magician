import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="display">
            <span>0</span>
          </div>
          <div className="row">
            <button type="button" className="btn">AC</button>
            <button type="button" className="btn">+/-</button>
            <button type="button" className="btn">%</button>
            <button type="button" className="btn operator">÷</button>
          </div>
          <div className="row">
            <button type="button" className="btn">7</button>
            <button type="button" className="btn">8</button>
            <button type="button" className="btn">9</button>
            <button type="button" className="btn operator">x</button>
          </div>
          <div className="row">
            <button type="button" className="btn">4</button>
            <button type="button" className="btn">5</button>
            <button type="button" className="btn">6</button>
            <button type="button" className="btn operator">-</button>
          </div>
          <div className="row">
            <button type="button" className="btn">1</button>
            <button type="button" className="btn">2</button>
            <button type="button" className="btn">3</button>
            <button type="button" className="btn operator">+</button>
          </div>
          <div className="last-row">
            <button type="button" className="btn">0</button>
            <button type="button" className="btn">.</button>
            <button type="button" className="btn operator">=</button>
          </div>
        </div>
      </>
    );
  }
}
