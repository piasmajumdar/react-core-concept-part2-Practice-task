import { useState } from "react"

export default function Task2(){

    const [show, setShow] = useState(0);

    const handleText = ()=>{
        if(show==0){
            setShow(1);
        }else {
            setShow(0)
        }
    }

    return (
        <>
            <h3>Task-2</h3>
            {show==1?<p>Hello, React Learner!</p> : <p></p>}
            <button onClick={handleText}>{show==0 ? 'Show': 'Hide'}</button>
        </>
    )
}