import { useState } from 'react'
import CounterApp from './component/CounterApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CounterApp/>
    </>
  )
}

export default App
