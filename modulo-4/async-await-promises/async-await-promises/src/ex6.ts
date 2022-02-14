import axios from "axios";
import { baseURL } from "./baseURL";

// retorna uma única Promise que resolve quando todas as promises anteriores forem resolvidas ou quando o iterável passado como argumento não contém promises.

// Ele agregar resultados de várias prom


type user = {
	id: string;
	name: string;
	email: string;
}


const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };