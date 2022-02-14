 import axios from "axios"
 import { baseURL } from "./baseURL"
 
 
 // a. A arrow function diferente da função nomeada usa uma const e recebe o asycu depois do nome da função.
 
 const getSubscribes = async () : Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
  };

 