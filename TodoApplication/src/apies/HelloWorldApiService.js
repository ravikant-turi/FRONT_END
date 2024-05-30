import axios from "axios";

// export function retriveHelloWordBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

// export  function retriveHelloWordBean(){
//     return axios.get('http://localhost:8080/hello-world/path-variable/ravi')
// }

// export const retrieveHelloWorldBean=()=>axios.get('http://localhost:8080/hello-world-bean')

//  const retrieveHelloWorldBean1=()=>axios.get('http://localhost:8080/hello-world/path-variable')
 

export const apiClient= axios.create(
    {
        baseURL:'http://localhost:8080'
    }
);
export const retriveHelloWordBean=
(username)=>apiClient.get(`/hello-world/path-variable/${username}`)


 export default "Hello"
