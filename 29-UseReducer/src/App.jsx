import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminPanel from './components/adminPanel/AdminPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdminPanel/>
    </>
  )
}

export default App
