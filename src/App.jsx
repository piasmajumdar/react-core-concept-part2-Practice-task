import { Suspense } from 'react'
import './App.css'
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'


const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}


function App() {

  const usersPromise = fetchUsers();

  return (
    <>
      <Task1></Task1>
      <Task2></Task2>
      <Suspense fallback={<p className='card'>Users are loading...</p>}>
        <Task3 usersPromise={usersPromise}></Task3>
      </Suspense>
    </>
  )
}

export default App
