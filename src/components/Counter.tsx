import React, { useState } from "react";
import "../styles/counter.css"

interface CounterArgs {
    subtractCallback?: Function,
    addCallback?: Function
}

function Counter({subtractCallback, addCallback}: CounterArgs) {
    const [count, setCount] = useState(0)

    return (
        <div className="counter">
            <button onClick={() => {
                setCount(count === 0 ? 0 : count - 1)
                if (subtractCallback) subtractCallback()
            }}
            >-</button>
            <p>{count}</p>
            <button onClick={() => {
                setCount(count + 1)
                if (addCallback) addCallback()
            }}
            >+</button>
        </div>
    )
}

export default Counter;