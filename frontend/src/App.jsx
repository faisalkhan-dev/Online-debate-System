import { useState } from 'react'
import './App.css'
import Login from './Components/login'
import SignUp from './Components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Online Debate System</h1>
      <Login/>
      <SignUp/>
    </>
  )
}

export default App
