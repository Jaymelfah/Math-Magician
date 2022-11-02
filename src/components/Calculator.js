import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [currstate, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const obj = calculate(currstate, e.target.textContent);
    return setState(obj);
  };

  return (
    <>
      <div className="allcontainer calc flex">
        <div className="calc-header">
          <h2>Lets do some Math!</h2>
        </div>
        <div className="container">
          <div className="display flex">
            <span role="none">
              { currstate.total }
              { currstate.operation }
              { currstate.next }
            </span>
          </div>
          <div className="row">
            <button type="button" onClick={handleClick} className="btn">AC</button>
            <button type="button" onClick={handleClick} className="btn">+/-</button>
            <button type="button" onClick={handleClick} className="btn">%</button>
            <button type="button" onClick={handleClick} className="btn operator">÷</button>
          </div>
          <div className="row">
            <button type="button" onClick={handleClick} className="btn">7</button>
            <button type="button" onClick={handleClick} className="btn">8</button>
            <button type="button" onClick={handleClick} className="btn">9</button>
            <button type="button" onClick={handleClick} className="btn operator">x</button>
          </div>
          <div className="row">
            <button type="button" onClick={handleClick} className="btn">4</button>
            <button type="button" onClick={handleClick} className="btn">5</button>
            <button type="button" onClick={handleClick} className="btn">6</button>
            <button type="button" onClick={handleClick} className="btn operator">-</button>
          </div>
          <div className="row">
            <button type="button" onClick={handleClick} className="btn">1</button>
            <button type="button" onClick={handleClick} className="btn">2</button>
            <button type="button" onClick={handleClick} className="btn">3</button>
            <button type="button" onClick={handleClick} className="btn operator">+</button>
          </div>
          <div className="last-row">
            <button type="button" onClick={handleClick} className="btn">0</button>
            <button type="button" onClick={handleClick} className="btn">.</button>
            <button type="button" onClick={handleClick} className="btn operator">=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
