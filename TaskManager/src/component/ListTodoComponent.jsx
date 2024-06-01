
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useParams,
    Link,
  }
  
  from "react-router-dom";
  
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
function ListTodoComponent() {
    const today = new Date();
    const targetDate = new Date(
      today.getFullYear() + 12,
      today.getMonth(),
      today.getDate()
    );
    const todos = [
      {
        id: 1,
        description: "learn dsa",
        done: false,
        targetDate: targetDate,
      },
      {
        id: 2,
        description: "learn web",
        done: false,
        targetDate: targetDate,
      },
      {
        id: 3,
        description: "learn app",
        done: false,
        targetDate: targetDate,
      },
    ];
    return (
      <>
        <h3>Tood list {todos[0].done}</h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td>Id</td>
                <td>Description</td>
                <td>Isdone?</td>
                <td>TargetDate</td>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
export default ListTodoComponent  