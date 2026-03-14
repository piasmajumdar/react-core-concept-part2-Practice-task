import { useEffect, useState } from "react"
import User from "./User"

export default function Task32(){
    const [users, setUsers]  = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data=> setUsers(data))
    },[])

    return (
        <div className="card">
            <h3>Task 3 - useState</h3>
            <h4>Total Users: {users.length}</h4>
            {users.map(user=> <User key={user.id} user={user}></User>)}
        </div>
    )
}