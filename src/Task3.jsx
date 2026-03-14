import { use } from "react";
import User from "./User";


export default function Task3({usersPromise}) {
    const users = use(usersPromise);
    return (
        <div className="card">
            <h3>Task-3</h3>
            <h4>Total Users: {users.length}</h4>
            {users.map(user=> <User key={user.id} user={user}></User>)}
        </div>
    )
}