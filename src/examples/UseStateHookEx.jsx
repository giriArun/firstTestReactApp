import React from 'react';
import { useState } from 'react';

export default function UseStateHookEx() {
    const [count, setCount] = useState(0);

    let countJS = 0;
    function countInJS(e) {
        if (e.target.classList.contains("+")) {
            console.log(countJS);
            return (countJS += 1);
        } else {
            console.log(countJS);
            return (countJS -= 1);
        }
    };

    return (
        <div>
            <h1>use state hook example</h1>
            {/* using JS */}
            <button className='btn +' onClick={(e) => countInJS(e)}>+</button>
            <span>Your number is {count}</span>
            <button className='btn -' onClick={(e) => countInJS(e)}>-</button>
            {/* using useState hook */}
            <button className='btn +' onClick={() => setCount(count + 1)}>+</button>
            <span>Your number is {count}</span>
            <button className='btn -' onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}
