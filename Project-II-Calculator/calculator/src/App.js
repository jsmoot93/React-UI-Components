import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      <div>
        <ActionButton text="clear" />
        <NumberButton buttonStyle="red" text="/" />
      </div>
      <div>
        <NumberButton buttonStyle="number" text="7" />
        <NumberButton buttonStyle="number" text="8" />
        <NumberButton buttonStyle="number" text="9" />
        <NumberButton buttonStyle="red" text="X" />
      </div>
      <div>
        <NumberButton buttonStyle="number" text="4" />
        <NumberButton buttonStyle="number" text="5" />
        <NumberButton buttonStyle="number" text="6" />
        <NumberButton buttonStyle="red" text="-" />
      </div>
      <div>
        <NumberButton buttonStyle="number" text="1" />
        <NumberButton buttonStyle="number" text="2" />
        <NumberButton buttonStyle="number" text="3" />
        <NumberButton buttonStyle="red" text="+" />
      </div>
      <div>
        <ActionButton text="0" />
        <NumberButton buttonStyle="red" text="=" />
      </div>
    </div>
  );
};

export default App;
