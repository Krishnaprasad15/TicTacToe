import {useState} from 'react'

const Counter =()=>{
    const [count,setCount]= useState(0);
    return (
        <>
            <h1>Count is - {count}</h1>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <button onClick={()=> setCount(count-1)}>Decrement</button>
        </>
    )
}
export default Counter;