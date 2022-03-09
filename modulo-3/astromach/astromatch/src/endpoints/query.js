import axios from "axios"
import { BASE_URL } from "../API/url"

export const getProfile = async () => {
  const response = await axios.get(`${BASE_URL}/person`)

  return response.data.profile

};

export const getMatches = async () => {
  const response = await axios.get(`${BASE_URL}/matches`)

  return response.data.matches
};

export const profileRequest = async (choice, profileId) => {
  const body = {
    choice: choice,
    id: profileId
  }

  const response = await axios.post(`${BASE_URL}/choose-person`, body)

  return response
};

export const reset = async () => {
  const response = await axios.put(`${BASE_URL}/clear`)

  return response
}
