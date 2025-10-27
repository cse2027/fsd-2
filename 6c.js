import React, { useState } from 'react';

function CounterFunc() {
  const [count, setCount] = useState(0);

  const incHandler = () => {
    if (count < 10) setCount(count + 1);
  };

  const decHandler = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>{count}</h1>
      <button onClick={incHandler}>Increment</button>
      <button
        onClick={decHandler}
        style={{ marginLeft: '10px' }}
      >
        Decrement
      </button>
    </div>
  );
}

export default CounterFunc;
