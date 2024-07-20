import React, { useState } from "react";
import "../styles/counter.css"


function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="counter">
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Counter;