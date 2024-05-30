import React from "react";
import { useState, useEffect } from "react";
import { retriveAllEmployee } from "../apiis/EmployeeApiService";
export default function EmployeeTableComponent() {
  const [employee, setemployee] = useState([]);
  useEffect(() => refreshTodo(), []);
  function refreshTodo() {
    retriveAllEmployee()
      .then((responese) => {
        setemployee(responese.data);

        console.log(responese);
      })
      .catch((error) => console.log(error))
      .finally(console.log("cleanUp"));
  }

  return (
    <div>
      <h1>this is ems table</h1>

      <table style={{ border: "2px solid black", width: " 100%" }}>
        <thead>
          <tr style={{ border: "2px white black" }}>
            <td>emp_name</td>
            <td>emp_salary</td>
            <td>emp_age</td>
            <td>emp_city</td>
          </tr>
        </thead>

        <tbody>
          {employee.map((todo) => (
            <tr key={todo.emp_Id}>
              <td>{todo.emp_name}</td>
              <td>{todo.emp_salary}</td>
              <td>{todo.emp_age}</td>
              <td>{todo.emp_city}</td>
              <td><button 
              onClick={()=>{
                console.log("deleted" + todo.emp_Id)
              }}>Delete</button></td>
               <td><button 
              onClick={()=>{
                console.log("updated" + todo.emp_Id)
              }}>Update</button></td>
              
              <td><button 
              onClick={()=>{
                console.log("updated" + todo.emp_Id)
              }}>Add</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// "emp_Id": 8,
//         "emp_name": "sandhan",
//         "emp_salary": 2200000.0,
//         "emp_age": 29,
//         "emp_city": "Patana"
