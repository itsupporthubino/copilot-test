import React, { useState } from 'react';


const Counter = () => {
    const [count, setCountt] = useState(0);

    const increment = () => {
        setCountt(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;