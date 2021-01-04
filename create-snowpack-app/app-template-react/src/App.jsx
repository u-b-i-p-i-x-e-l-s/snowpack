import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { foo } from './foobar'
import { derivative } from 'mathjs'

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create Foo state
  const [fooValue, setFoo] = useState('');
  // Calculate derivative
  const slope = derivative('x^2 + x', 'x');
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  const updateFoo = () => {
    const fooName = foo('Test123');
    setFoo(fooName);
  }

  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        <h2>Foobar</h2>
        <button onClick={updateFoo}>Update Foo</button>
        <p>{fooValue}</p>
        <h2>Derivative</h2>
        <p>{slope.toString()}</p>
      </header>
    </div>
  );
}

export default App;
