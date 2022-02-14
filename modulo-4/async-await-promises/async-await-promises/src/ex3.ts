import axios from "axios"
 import { baseURL } from "./baseURL"

type user = {
	id: string;
	name: string;
	email: string;
}



//a. Se usarmos o retorno na promisse o user ele retornara um erro.
//const getSubscribes = async () : Promise<user[]> => {
  //  const response = await axios.get(`${baseURL}/subscribers`)
    //return response.data
  //};

//b. Não é uma boa pratica pois o any engloba todos os parametros possiveis.

const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      }
    })
  };
