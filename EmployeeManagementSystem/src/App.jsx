import { useState } from 'react'
EmployeeTableComponent
import './App.css'
import EmployeeTableComponent from './component/EmployeeTableComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<EmployeeTableComponent/>
      hello EMS
      
    </>
  )
}

export default App
