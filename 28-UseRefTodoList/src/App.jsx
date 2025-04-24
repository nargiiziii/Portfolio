import { useState } from 'react'
import ToDoApp from './components/toDoApp/toDoApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoApp/>
    </>
  )
}

export default App
