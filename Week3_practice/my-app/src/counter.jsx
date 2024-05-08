import React, { useState } from 'react'

const getRandom = () => parseInt(Math.random() * 30);
function Counter() {
    const [count, setCount] = useState(0);

    function Increase(){
        setCount(count + 1);
    }
    function Decrease(){
        setCount(count -1);
    }
    function Reset(){
        setCount(0);
    }
    function Random(){
        setCount(getRandom);
    }
    return (
        <>
        <div id='title'>Counter!</div>
        <div className='container'>
            <h1>{count}</h1>
            <div className='btnContainer'>
                <button onClick={Increase} className='btn'>+</button>
                <button onClick={Reset} className='btn'>reset</button>
                <button onClick={Decrease} className='btn'>-</button>
                <button onClick={Random} className='btn'>random</button>
            </div>
        </div>
        </>
    )
}

export default Counter;