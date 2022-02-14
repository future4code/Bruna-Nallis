import axios from "axios"
import {baseURL} from '../src/baseURL'

// a. Deve-se usar o endpoint Get;

// b. usando uma Promisse com o parametro "any";

async function getSubscribes(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
  };

