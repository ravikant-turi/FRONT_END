import axios from 'axios'

const apiClient=axios.create(
    {
        baseURL:'http://localhost:8080/api'
    }
);
export const retriveAllEmployee
=(username)=>apiClient.get(`/employee`)
// http://localhost:8080/api/employee