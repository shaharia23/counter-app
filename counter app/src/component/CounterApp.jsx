import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(prev => prev + 1);
  const handleDecrease = () => setCount(prev => prev - 1);
  const handleReset = () => setCount(0);

  // Conditional message
  let message;
  if (count > 5) {
    message = "You’ve gone above 5!";
  } else if (count < 0) {
    message = "You’re in negative!";
  } else {
    message = "Keep going!";
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Interactive Counter</h1>
      <p>Current Count: {count}</p>
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease} style={{ margin: '0 10px' }}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{message}</p>
    </div>
  );
};

export default CounterApp;
