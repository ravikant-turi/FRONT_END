import { useState } from 'react'
import './App.css'
import TodoApp from './todo/TodoApp'
import ListTodosComponent from './component/ListTodosComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ListTodosComponent/>  */}
      <TodoApp/>
   
    </>
  )
}

export default App
