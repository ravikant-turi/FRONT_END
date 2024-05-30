import axios from 'axios'

const apiClient=axios.create(
    {
        baseURL:'http://localhost:8080'
    }
);
export const retriveAllTodosForUserName
=(username)=>apiClient.get(`/users/in28minutes/todos`)


// http://localhost:8080/users/in28minutes/todos/1
export const deleteTodoApi
= (username,id)=>apiClient.delete(`users/${username}/todos/${id}`)
export const retrieveTodoApi
= (username,id)=>apiClient.get(`users/${username}/todos/${id}`)
export const updateTodoApi
= (username,id,todo)=>apiClient.put(`users/${username}/todos/${id}`,todo)

