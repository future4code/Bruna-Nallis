import axios from "axios"
import { baseURL } from "./baseURL"

// a. é uma função nomeada que tem um endpoint PUT; Esse tipo de função deixa a escrita do codigo mais clara.


async function createNews(
     title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: Date
    })
  };