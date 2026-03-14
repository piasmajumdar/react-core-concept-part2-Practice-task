import { useState } from "react"

export default function Task1() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h3>Task-1</h3>
            <h2>Count: {count}</h2>
            <button onClick={()=>{setCount(count+1)}}>+ Plus</button>
            <button onClick={()=>{setCount(0)}}>Reset</button>
            <button onClick={()=> {setCount(count-1)}}>- Minus</button>
        </>
    )
}