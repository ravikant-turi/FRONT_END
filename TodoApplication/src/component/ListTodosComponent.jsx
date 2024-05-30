import React, { useEffect, useState } from "react";
import { retriveAllTodosForUserName ,deleteTodoApi} from "../apies/TodoApiService";
import { useAuth } from "../security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent() {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );
  const navigate=useNavigate()
 const authContext= useAuth()
 const username=authContext.username
  const [todos, setTodos] = useState([]);

  const [message,setMessage]=useState(null)

  useEffect(() => refreshTodo(), []);
  function refreshTodo() {
    retriveAllTodosForUserName(username)
      .then((responese) => {
        setTodos(responese.data);


        console.log(responese);
        console.log(today);
      })
      .catch((error) => console.log(error))
      .finally(console.log("cleanUp"));
  }
  function deleteTodo(id){
    console.log("clicked :"+ id)
    deleteTodoApi(username,id)
    .then(
      ()=>{
      //1:display message
      setMessage(`delete with  id= ${id} succesfull`)
      //update todo list
 
      refreshTodo()
      }
    )
    .catch()
    .finally(console.log("deleteApi : " + "cleanup"))
  }
  
  return (
    <div className="container">
      <h1>Things you want to Do!</h1>
      {
        message &&<div className="alert alert-warning">
        {message}
      </div>
      }
      
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>Description</td>
              <td>done</td>
              <td>TargetDate</td>
              <td>Delete</td>
              <td>update</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                {/* <td>{todo.targetDate.toDateString()}</td> */}
                <td>{todo.targetDate}</td>
                <td>
                  <button
                   className="btn btn-warning"
                   onClick={()=>deleteTodo(todo.id)}
                  >Delete</button>
                </td>
                <td>
                  <button
                   className="btn btn-success"
                   onClick={()=>{
                    navigate(`/todo/${todo.id}`)
                    console.log("updated"+ todo.id)
                  }}
                  >update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
